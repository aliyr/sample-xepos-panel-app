import { Component, OnInit, ViewChild } from "@angular/core";
import { CompanyDetailsService } from "../../../services/company-details/company-details.service";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-company-details-list",
  templateUrl: "./company-details-list.component.html",
  styleUrls: ["./company-details-list.component.scss"]
})
export class CompanyDetailsListComponent implements OnInit {
  dataSource = new MatTableDataSource(this.companyDetailsService.ElementData);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = [
    "orderNo",
    "name",
    "privateAddress",
    "lastLogin",
    "salesToday",
    "allTransactions",
    "lastTransaction",
    "isActive",
    "edit"
  ];
  constructor(
    private companyDetailsService: CompanyDetailsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  updateUser(userID): void {
    this.router.navigate(["/company-details/form", userID]);
  }
  openWiazrdForm() {
    this.router.navigate(["/company-details/wizard"]);
  }
}
