import { Component, OnInit, ViewChild } from "@angular/core";
import {CompanyDetailsService} from 'app/services/company-details/company-details.service';
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-company-details-list",
  templateUrl: "./company-details-list.component.html",
  styleUrls: ["./company-details-list.component.scss"]
})
export class CompanyDetailsListComponent implements OnInit {
  dataSource ;
  filterText: string;
  // isActive: boolean = null;
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
    "delete",
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
    this.dataSource.filter = this.filterText.trim().toLowerCase();
  }
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

  deleteCompany(companyName): void {
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

  updateUser(userID): void {
    this.router.navigate(["/company-details/form", userID]);
  }
  openWizardForm() {
    this.router.navigate(["/company-details/wizard"]);
  }
  updateTable() {
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
