import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from "@angular/core";
import { UserManagementService } from "app/services/user-management/user-management.service";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { NgLog } from "app/decorators/nglog.decorator";
import { Router } from "@angular/router";
import { merge } from "rxjs";
import {
  delay,
  distinctUntilChanged,
  filter,
  startWith,
  switchMap
} from "rxjs/operators";
import { map } from "rxjs/operators";
import { fromEvent } from "rxjs";
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
  filterValue: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild("filterInput") filterInput: ElementRef;

  constructor(
    private userManagementService: UserManagementService,
    private router: Router
  ) {}

  ngOnInit() {
    this.displayedColumns = ["Name", "edit", "delete"];
  }

  ngAfterViewInit() {
    const filterEvent = this.createFilterEvent(
      this.filterInput,
      this.filterValue
    );
    const sortEvent = this.createSortEvent(this.sort);
    // back to first page for sorting
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page, filterEvent)
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.userManagementService.getUsers(
            "/odata/XBack/products/XBack.getProductsForGridView",
            this.paginator.pageIndex + 1,
            { name: this.sort.active, direction: this.sort.direction },
            this.paginator.pageSize,
            this.filterValue
          );
        }),
        map(data => {
          this.resultsLength = data["@odata.count"];
          return data;
        })
      )
      .subscribe((data: { value }) => {
        (this.dataSource.data as any) = data.value;
      });
  }

  updateUser(userID): void {
    this.router.navigate(["/user-management/form", userID]);
  }

  // it returns a observable that observes the changes of table filter input
  // and it should be async because the 'element' wasn't created when the function gets called
  async createFilterEvent(element, filterValue) {
    return fromEvent(element, "keyup").pipe(
      filter(() => filterValue.length > 2 || filterValue.length === 0),
      delay(150),
      distinctUntilChanged()
    );
  }

  createSortEvent(element) {
    return element;
  }
}
