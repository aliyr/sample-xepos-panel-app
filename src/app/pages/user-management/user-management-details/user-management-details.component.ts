import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { UserManagementService } from "app/services/user-management/user-management.service";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { NgLog } from "app/decorators/nglog.decorator";
import { Router } from "@angular/router";
import {merge} from 'rxjs';
import {startWith, switchMap} from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Component({
  selector: "app-user-management-list",
  templateUrl: "./user-management-details.component.html",
  styleUrls: ["./user-management-details.component.scss"]
})
@NgLog()
export class UserManagementDetailsComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource([]);
  displayedColumns: string[];
  resultsLength = 0;
  filterText = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('filterTable') filterTable: ElementRef;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private userManagementService: UserManagementService,
    private router: Router
  ) {}
  ngOnInit() {
    this.displayedColumns = [
      "Name",
      // "type",
      // "userLocation",
      "edit",
      "delete"
    ];
    // this.updateMaterialTable();
  }

  ngAfterViewInit() {
    debugger;
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page, this.filterText).pipe(
      startWith({}),
      switchMap(() => {
        return this.userManagementService.getUsers('/odata/XBack/products/XBack.getProductsForGridView',this.paginator.pageIndex + 1 ,{name: this.sort.active , direction: this.sort.direction} ,this.paginator.pageSize );
      }),
      map(data => {
        this.resultsLength = data['@odata.count'];
        return data;
      }),
    ).subscribe(data => {
      (this.dataSource.data as any) = data.value;
      console.log(this.dataSource.data);
    });
  }

  deleteUser(UserName): void {
    this.userManagementService.ElementData.map((elem, index) => {
      if (UserName === elem.displayName) {
        this.userManagementService.ElementData.splice(index, 1);
      }
    });
    this.dataSource = new MatTableDataSource(
      this.userManagementService.ElementData
    );
    // this.updateMaterialTable();
  }

  updateUser(userID): void {
    this.router.navigate(["/user-management/form", userID]);
  }

  applyFilter(filterValue: string) {
    // this.dataSource.filter = filterValue.trim().toLowerCase();

    return new Promise();
  }

  // updateMaterialTable(): void {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  //   this.dataSource.filterPredicate = function(data, filter: string): boolean {
  //     return (
  //       data.firstName.toLowerCase().includes(filter) ||
  //       data.type.toString().includes(filter)
  //     );
  //   };
  // }
}
