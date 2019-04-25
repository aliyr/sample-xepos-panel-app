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
  dataSource ;
  filterValue: string;
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
    this.dataSource = new MatTableDataSource(this.companyDetailsService.ElementData);
    this.updateTable();
  }

  applyFilter() {
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }
  applySpecificFilter(filterValue: boolean) {
    const newFilteredValues = this.companyDetailsService.ElementData.filter(
      data => {
        if (filterValue === null || data.isActive === filterValue) {
          return data;
        }
      }
    );
    this.dataSource = new MatTableDataSource(newFilteredValues);
    this.applyFilter();
    this.updateTable();
  }

  updateUser(userID): void {
    this.router.navigate(["/company-details/form", userID]);
  }
  openWiazrdForm() {
    this.router.navigate(["/company-details/wizard"]);
  }
  updateTable() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // filterpredicate is used to limit search datas to specific columns
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return (
        data.name.toLowerCase().includes(filter) ||
        data.privateAddress.toString().includes(filter)
      );
    };
  }
}
