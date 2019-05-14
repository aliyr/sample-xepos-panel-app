import { Injectable } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { UserManagementService } from "app/services/user-management/user-management.service";

import { merge } from "rxjs";
import {
  delay,
  distinctUntilChanged,
  filter,
  startWith,
  switchMap,
  tap
} from "rxjs/operators";
import { map } from "rxjs/operators";
import { fromEvent } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TableManagementService {
  filterEvent;
  sortEvent;
  paginationEvent;
  dataSource: MatTableDataSource<[]> = new MatTableDataSource([]);
  filterValue;
  resultsLength = 0;

  constructor(private userManagementService: UserManagementService ) {}

 
   mergeData(apiMainUrl) {
    this.sortEvent.sortChange.subscribe(
      () => (this.paginationEvent.pageIndex = 0)
    );

    merge(
      this.sortEvent.sortChange,
      this.paginationEvent.page,
      this.filterEvent
    )
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.userManagementService.getUsers(
            apiMainUrl,
            this.paginationEvent.pageIndex + 1,
            {
              name: this.sortEvent.active,
              direction: this.sortEvent.direction
            },
            this.paginationEvent.pageSize,
            this.filterValue
          );
        }),
        map(data => {
          this.resultsLength = data["@odata.count"];
          return data;
        })
      )
      .subscribe((data: { value }) => {
        this.dataSource.data = data.value;
      });
  }

  async createFilterEvent(element) {
    this.filterEvent = fromEvent(element.nativeElement, "keyup").pipe(
    
      filter(() => element.nativeElement.value.length > 2 || element.nativeElement.value.length === 0),
      delay(150),
      distinctUntilChanged(),
      tap(()=> {
        this.filterValue = element.nativeElement.value;
      })
    );
  }

  async createSortEvent(element) {
    this.sortEvent = element;
  }
  async createPaginationEvent(element) {
    this.paginationEvent = element;
  }
}
