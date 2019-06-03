import { Component, OnInit, ViewChild } from "@angular/core";
import { CompanyDetailsService } from "app/services/company-details/company-details.service";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { Company } from "app/models/Company";

@Component({
  selector: "app-company-details-list",
  templateUrl: "./company-management-details.component.html",
  styleUrls: ["./company-management-details.component.scss"]
})
export class CompanyManagementDetailsComponent implements OnInit {
  dataSource: MatTableDataSource<Company>;
  filterText: string;
  // isActive: boolean = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[];

  constructor(
    private companyDetailsService: CompanyDetailsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.displayedColumns = [
      "orderNo",
      "name",
      "privateAddress",
      "lastLogin",
      "salesToday",
      "allTransactions",
      "lastTransaction",
      "edit",
      "delete"
    ];
    this.dataSource = new MatTableDataSource(
      this.companyDetailsService.ElementData
    );
    this.updateTable();
  }

  applyFilter(): void {
    this.dataSource.filter = this.filterText.trim().toLowerCase();
  }

  // >>>>> code for applying additional filter on table
  // applySpecificFilter(filterValue: boolean) {
  //   this.isActive = filterValue;
  //   const newFilteredValues = this.companyDetailsService.ElementData.filter(
  //     data => {
  //       if (filterValue === null || data.isActive === filterValue) {
  //         return data;
  //       }
  //     }
  //   );
  //   this.dataSource = new MatTableDataSource(newFilteredValues);
  //
  //   this.updateTable();
  //   this.applyFilter();
  // }

  deleteCompany(companyName: string): void {
    this.companyDetailsService.ElementData.map((elem, index) => {
      if (companyName === elem.name) {
        this.companyDetailsService.ElementData.splice(index, 1);
      }
    });
    this.dataSource = new MatTableDataSource(
      this.companyDetailsService.ElementData
    );
    this.updateTable();
  }

  updateUser(userID: number): void {
    this.router.navigate(["/panel/company-management/form", userID]);
  }
  openWizardForm() {
    this.router.navigate(["/panel/company-management/wizard"]);
  }
  updateTable(): void {
    // filter predicate is used to limit search datas to specific columns
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return (
        data.name.toLowerCase().includes(filter) ||
        data.privateAddress.toString().includes(filter)
      );
    };
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
