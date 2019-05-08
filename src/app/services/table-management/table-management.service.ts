import { Injectable } from '@angular/core';
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
@Injectable({
  providedIn: 'root'
})
export class TableManagementService  {
  elementData;
  dataSource: MatTableDataSource<any> = new MatTableDataSource(this.elementData);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() {

    console.log('aaaa');
    this.dataSource =new MatTableDataSource(this.elementData);

    this.updateTable();
   }

    applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

 


    deleteCompany(companyName: string): void {
    this.elementData.ElementData.map((elem, index) => {
      if (companyName === elem.name) {
        this.elementData.ElementData.splice(index, 1);
      }
    });
    this.dataSource = new MatTableDataSource(this.elementData.ElementData);
    this.updateTable();
  }

  updateTable(): void {
    // filter predicate is used to limit search datas to specific columns
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return (
        data.name.toLowerCase().includes(filter) ||
        data.name.toString().includes(filter)
      );
    };
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}

 