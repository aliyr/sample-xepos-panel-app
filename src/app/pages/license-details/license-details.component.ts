import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef
} from "@angular/core";
import { MatPaginator, MatSort } from "@angular/material";
import { TableManagementService } from "app/services/table-management/table-management.service";
import { LicenseDetailsService } from "app/services/license-details/license-details.service";
import { License } from "app/models/license";

@Component({
  selector: "app-license-details",
  templateUrl: "./license-details.component.html",
  styleUrls: ["./license-details.component.scss"]
})
export class LicenseDetailsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild("filterInput") filterInput: ElementRef;

  constructor(public licenseDetailsService: LicenseDetailsService) {}

  dataSource: License[];
  ngOnInit() {
    this.displayedColumns = [
      "licenseNO",
      "deviceID",
      "status",
      "licensePairCode",
      "activation"
    ];
    this.dataSource = [
      {
        licenseNO: 1,
        deviceID: "444ffsdf33424",
        status: "free",
        licensePairCode: "-"
      },
      {
        licenseNO: 2,
        deviceID: "f34wcvqf5cvff",
        status: "free",
        licensePairCode: "-"
      },
      {
        licenseNO: 3,
        deviceID: "4222fsdfasdf4",
        status: "pending",
        licensePairCode: "-"
      },
      {
        licenseNO: 4,
        deviceID: "fghd6xftgthh4",
        status: "invoked",
        licensePairCode: "-"
      }
    ];
  }

  ngAfterViewInit(): void {
    // this.tableManagementService.createFilterEvent(this.filterInput);
    // this.tableManagementService.createSortEvent(this.sort);
    // this.tableManagementService.createPaginationEvent(this.paginator);
    // this.tableManagementService.mergeData(
    //   "/odata/XBack/products/getProductsForGridView"
    // );
  }

  revokeLicense() {}
}
