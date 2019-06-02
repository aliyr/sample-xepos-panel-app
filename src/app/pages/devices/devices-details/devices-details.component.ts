import { Component, OnInit, ViewChild } from "@angular/core";
import { DevicesService } from "app/services/devices/devices.service";
import { Router } from "@angular/router";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Device } from "app/models/device";
@Component({
  selector: "app-devices-details",
  templateUrl: "./devices-details.component.html",
  styleUrls: ["./devices-details.component.scss"]
})
export class DevicesDetailsComponent implements OnInit {
  displayedColumns: string[];
  dataSource: MatTableDataSource<Device>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private devicesService: DevicesService, private router: Router) {}

  ngOnInit() {
    this.displayedColumns = ["name", "business", "isOnline", "edit", "delete"];

    this.dataSource = new MatTableDataSource(this.devicesService.ElementData);
    this.updateTable();
  }
  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteCompany(companyName: string): void {
    this.devicesService.ElementData.map((elem: Device, index) => {
      if (companyName === elem.name) {
        this.devicesService.ElementData.splice(index, 1);
      }
    });
    this.dataSource = new MatTableDataSource(this.devicesService.ElementData);
    this.updateTable();
  }
  updateDevice(userID) {
    this.router.navigate(["/panel/devices/form", userID]);
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
