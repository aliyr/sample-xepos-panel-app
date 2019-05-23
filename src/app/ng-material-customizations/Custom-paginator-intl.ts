import { MatPaginatorIntl } from "@angular/material";
// import { Injectable  } from "@angular/core";

// @Injectable({
//   providedIn: "root"
// })

export class CustomMatPaginatorIntl extends MatPaginatorIntl {
  itemsPerPageLabel: string;
  nextPageLabel: string;
  previousPageLabel: string;

  constructor() {
    super();
    this.itemsPerPageLabel = "items on page";
    this.nextPageLabel = "next";
    this.previousPageLabel = "prev";
  }
  getRangeLabel = function(page: number, pageSize: number, length: number) {
    // this if triggers when list is null
    if (length === 0 || pageSize === 0) {
      return "0 of " + length;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;
    return startIndex + 1 + " - " + endIndex + " of " + length;
  };
}
