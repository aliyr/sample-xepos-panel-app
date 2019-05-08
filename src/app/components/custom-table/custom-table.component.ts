import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Company } from "app/models/Company";

@Component({
  selector: "app-custom-table",
  templateUrl: "./custom-table.component.html",
  styleUrls: ["./custom-table.component.scss"]
})
export class CustomTableComponent implements OnInit {
  @Input() elementData;
  @Input() displayedColumns: string[];
  @Input() itemsPerPage: number[];

  @Output() deleteItem: EventEmitter<number> = new EventEmitter();
  @Output() editItem: EventEmitter<string> = new EventEmitter();

  dataSource: MatTableDataSource<Company>;
  filterText: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.elementData);
    this.updateTable();
  }
  emitEditItem(item) {
    this.editItem.emit(item);
  }
  emitDeleteItem(item) {
    this.deleteItem.emit(item);
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

  updateTable(): void {
    // filter predicate is used to limit search datas to specific columns
    const filerParam = this.displayedColumns[0];
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return (
        data[filerParam].toLowerCase().includes(filter) ||
        data[filerParam].toString().includes(filter)
      );
    };
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
