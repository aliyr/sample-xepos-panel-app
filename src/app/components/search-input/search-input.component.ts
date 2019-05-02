import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { NgLog } from "app/decorators/nglog.decorator";
@Component({
  selector: "app-search-input",
  templateUrl: "./search-input.component.html",
  styleUrls: ["./search-input.component.scss"]
})
@NgLog()
export class SearchInputComponent implements OnInit {
  @Input() listValues: any[];
  @Output() newEmittedValues = new EventEmitter();
  filteredValues: string[];
  constructor() {}

  ngOnInit() {}

  filterTableList(searchValue: string): void {
    this.filteredValues = this.listValues.filter(elem => {
      const rawData = elem.displayName.trim().toLowerCase();
      const searchText = searchValue.trim().toLowerCase();
      if (rawData.includes(searchText)) {
        return elem;
      }
    });
    this.newEmittedValues.emit(this.filteredValues);
  }
}
