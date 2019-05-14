import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from "@angular/core";
import { TableManagementService } from "app/services/table-management/table-management.service";

import { MatPaginator, MatSort } from "@angular/material";
import { NgLog } from "app/decorators/nglog.decorator";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-management-list",
  templateUrl: "./user-management-details.component.html",
  styleUrls: ["./user-management-details.component.scss"]
})
@NgLog()
export class UserManagementDetailsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild("filterInput") filterInput: ElementRef;

  constructor(
    private tableManagementService: TableManagementService,
    private router: Router
  ) {}

  ngOnInit() {
    this.displayedColumns = ["Name", "edit", "delete"];
  }

  ngAfterViewInit() {
    this.tableManagementService.createFilterEvent(this.filterInput);
    this.tableManagementService.createSortEvent(this.sort);
    this.tableManagementService.createPaginationEvent(this.paginator);
    this.tableManagementService.mergeData("/odata/XBack/products/XBack.getProductsForGridView");
  }
  updateUser(userID): void {
    this.router.navigate(["/user-management/form", userID]);
  }

  // it returns an observable that observes the changes of table filter input
  // and it should be async because the 'element' wasn't created when the function gets called
}
