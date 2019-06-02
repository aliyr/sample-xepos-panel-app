import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild} from "@angular/core";
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
export class UserManagementDetailsComponent implements OnInit, AfterViewInit  {
  displayedColumns: string[];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild("filterInput") filterInput: ElementRef;

  constructor(
    public tableManagementService: TableManagementService,
    public router: Router
  ) {}

  ngOnInit() {
    this.displayedColumns = ["Name", "edit", "delete"];
  }

  ngAfterViewInit() {
    this.tableManagementService.createFilterEvent(this.filterInput);
    this.tableManagementService.createSortEvent(this.sort);
    this.tableManagementService.createPaginationEvent(this.paginator);
    this.tableManagementService.mergeData(
      "/odata/XBack/products/getProductsForGridView"
    );

  }

  updateUser(userID): void {
    this.router.navigate(["/panel/user-management/form", userID]);
  }
}
