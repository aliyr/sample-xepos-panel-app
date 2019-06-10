import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import { Router } from "@angular/router";
import { MatPaginator, MatSort } from "@angular/material";
import { TableManagementService } from "app/services/table-management/table-management.service";
import { SnackbarService } from "app/services/snackbar/snackbar.service";

@Component({
  selector: "app-usermanagement-add-user",
  templateUrl: "./user-management-add-user.component.html",
  styleUrls: ["./user-management-add-user.component.scss"]
})
export class UsermanagementAddUserComponent implements OnInit, AfterViewInit {
  constructor(
    public tableManagementService: TableManagementService,
    private router: Router,
    private snackbarService: SnackbarService
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild("filterInput") filterInput: ElementRef;
  displayedColumns = ["name", "Add"];

  ngOnInit() {}
  addStaff(staff) {
    console.log(staff);
    staff.isSelected = true;
    this.snackbarService.toastSuccess(
      `user ${staff.Name} is added to your staffs`,
      " close ",
      3000
    );
  }
  cancel() {
    this.router.navigate(["/panel/user-management/details"]);
  }

  ngAfterViewInit() {
    this.tableManagementService.createFilterEvent(this.filterInput);
    this.tableManagementService.createSortEvent(this.sort);
    this.tableManagementService.createPaginationEvent(this.paginator);
    this.tableManagementService.mergeData(
      "/odata/XBack/products/getProductsForGridView"
    );
    console.log(this.tableManagementService.dataSource);
  }
}
