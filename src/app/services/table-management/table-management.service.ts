import { Injectable, ElementRef,  } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { UserManagementService } from "app/services/user-management/user-management.service";

import { merge, Observable } from "rxjs";
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
  filterEvent: Observable<{}>;
  sortEvent: MatSort;
  paginationEvent: MatPaginator;
  dataSource: MatTableDataSource<[]>;
  filterValue: string;
  resultsLength: number;
  isLoading: boolean;

  constructor(
    private userManagementService: UserManagementService,
    private router: Router,
  ) {
    this.resultsLength=0;
    this.dataSource = new MatTableDataSource([]);
    this.isLoading=true; 
  }

  // observes the sort and paginator changes
  mergeData(apiMainUrl: string): void {
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
        switchMap(() => {
          this.isLoading = true;
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
      .subscribe((data: { value: [] }) => {
        this.isLoading = false;
       
        this.dataSource.data = data.value;
      });
  }

  // observes the filter input text changes
  // it should be asynchronous because the element won't be generated when the function gets called
   createFilterEvent(element: ElementRef): void {
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

   createSortEvent(element: MatSort): void {
    this.sortEvent = element;
  }

   createPaginationEvent(element: MatPaginator): void {
    this.paginationEvent = element;
  }
  cancelRequest(): void {
    this.router.navigate(["/panel"]);
  }
}
