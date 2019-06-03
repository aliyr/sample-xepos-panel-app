import { Component, EventEmitter, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { DataSource } from "@angular/cdk/collections";
import { Observable, of } from "rxjs";

export interface Filter {
  name: string;
  from: number;
  to: number;
  active: boolean;
}

const filter: Filter[] = [
  { name: "Sunday", from: 0, to: 24, active: false },
  { name: "Monday", from: 0, to: 24, active: false },
  { name: "Tuesday", from: 0, to: 24, active: false },
  { name: "Wednesday", from: 0, to: 24, active: false },
  { name: "Thursday", from: 0, to: 24, active: false },
  { name: "Friday", from: 0, to: 24, active: false },
  { name: "Saturday", from: 0, to: 24, active: false }
];
@Component({
  selector: "app-days-picker",
  templateUrl: "./days-picker.component.html",
  styleUrls: ["./days-picker.component.scss"]
})
export class DaysPickerComponent {
  dataSource = new TableDataSource(filter);
  displayedColumns: string[] = ["name", "from", "range", "to"];
  filters: Filter[];
  slidersRefresh: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    public dialogRef: MatDialogRef<DaysPickerComponent>
  ) {
    this.dataSource.data$.subscribe(val => (this.filters = val));
    this.dialogRef.afterOpen().subscribe(() => this.slidersRefresh.emit());
  }

  close(): void {
    this.dialogRef.close();
    this.data.controller.patchValue(filter);
    debugger;
  }

  reset(): void {
    this.dataSource = new TableDataSource(
      this.filters.map(f => {
        f.active = false;
        f.from = 0;
        f.to = 100;
        return f;
      })
    );
  }
}

export class TableDataSource extends DataSource<any> {
  data$: Observable<Filter[]>;
  constructor(data: Filter[]) {
    super();
    this.data$ = of(data);
  }
  connect(): Observable<Filter[]> {
    return this.data$;
  }

  disconnect() {}
}
