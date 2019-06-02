import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { RegistersService } from "../../../services/registers/registers.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-registers-details",
  templateUrl: "./registers-details.component.html",
  styleUrls: ["./registers-details.component.scss"]
})
export class RegistersDetailsComponent implements OnInit {
  dataSource = new MatTableDataSource(this.registersService.registers);
  displayedColumns: string[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private registersService: RegistersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.displayedColumns = [
      "name",
      "openTime",
      "closeTime",
      "location",
      "edit",
      "delete"
    ];
    this.updateMaterialTable();
  }

  deleteRegister(registerName): void {
    this.registersService.registers.map((elem, index) => {
      if (registerName === elem.name) {
        this.registersService.registers.splice(index, 1);
      }
    });
    this.dataSource = new MatTableDataSource(
      this.registersService.registers
    );
    this.updateMaterialTable();
  }

  updateRegister(registerID): void {
    this.router.navigate(["/panel/registers/form", registerID]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  updateMaterialTable(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return (
        data.name.toLowerCase().includes(filter) ||
        data.assignedLocation.toString().includes(filter)
      );
    };
  }
}
