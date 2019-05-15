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
  tap,
  map
} from "rxjs/operators";

import { fromEvent } from "rxjs";
import { Router } from "@angular/router";

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
  isLoading: boolean;

  constructor(
    private userManagementService: UserManagementService,
    private router: Router
  ) {
    this.isLoading=true;
  }

  // observes the sort and paginator changes
  mergeData(apiMainUrl) {
    // return to first page if sorting is changed
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
        tap(() => {
          this.isLoading = true;
        }),
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
        this.isLoading = false;
        this.dataSource.data = data.value;
      });
  }

  // observes the filter input text changes
  // it should be asynchronous because the element won't be generated when the function gets called
  async createFilterEvent(element) {
    this.filterEvent = fromEvent(element.nativeElement, "keyup").pipe(
      filter(
        () =>
          element.nativeElement.value.length > 2 ||
          element.nativeElement.value.length === 0
      ),
      delay(150),
      distinctUntilChanged(),
      tap(() => {
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
  cancelRequest() {
    this.router.navigate(["/"]);
  }
}
