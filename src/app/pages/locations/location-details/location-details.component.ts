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

@Component({
  selector: "app-location-details",
  templateUrl: "./location-details.component.html",
  styleUrls: ["./location-details.component.scss"]
})
export class LocationDetailsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild("filterInput") filterInput: ElementRef;
  displayedColumns: string[];
  dataSource;
  constructor(
    private router: Router,
    public tableManagementService: TableManagementService
  ) {
    this.displayedColumns = [
      "locationName",
      "cityName",
      "street",
      "zipCode",
      "countryName",
      "edit"
    ];

    this.dataSource = [
      {
        locationName: "firstLoc",
        cityName: "city name",
        street: "street",
        zipCode: "zipCode",
        countryName: "countryName"
      },
      {
        locationName: "firstLoc",
        cityName: "city name",
        street: "street",
        zipCode: "zipCode",
        countryName: "countryName"
      },
      {
        locationName: "firstLoc",
        cityName: "city name",
        street: "street",
        zipCode: "zipCode",
        countryName: "countryName"
      },
      {
        locationName: "firstLoc",
        cityName: "city name",
        street: "street",
        zipCode: "zipCode",
        countryName: "countryName"
      }
    ];
  }

  ngOnInit() {}
  updateLocation(locName: string) {
    this.router.navigate(["/panel/locations/form", locName]);
  }

  ngAfterViewInit() {
    // this.tableManagementService.createFilterEvent(this.filterInput);
    // this.tableManagementService.createSortEvent(this.sort);
    // this.tableManagementService.createPaginationEvent(this.paginator);
    // this.tableManagementService.mergeData(
    //   "/odata/XBack/products/getProductsForGridView"
    // );
  }
}
