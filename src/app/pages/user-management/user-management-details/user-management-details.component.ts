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
import { BatchRequestService } from "app/services/batch-request/batch-request.service";

@Component({
  selector: "app-user-management-list",
  templateUrl: "./user-management-details.component.html",
  styleUrls: ["./user-management-details.component.scss"]
})
@NgLog()
export class UserManagementDetailsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[];
  dataSource;
  result;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild("filterInput") filterInput: ElementRef;

  constructor(
    public tableManagementService: TableManagementService,
    public router: Router,
    public batchRequest: BatchRequestService
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
    this.req();
  }
  async req() {
    this.result = await this.batchRequest.createBatchBody([
      "/odata/xback/users/getCurrentUser"
    ]);
  }
  updateUser(userID): void {
    this.router.navigate(["/panel/user-management/form", userID]);
  }
  addStaff() {
    this.router.navigate(["/panel/user-management/add-staff"]);
  }
}
