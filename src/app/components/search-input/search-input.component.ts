import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { NgLog } from "app/decorators/nglog.decorator";
@Component({
  selector: "app-search-input",
  templateUrl: "./search-input.component.html",
  styleUrls: ["./search-input.component.scss"]
})
@NgLog()
export class SearchInputComponent implements OnInit {
  @Input() listValues;
  @Input() filterParams: [];
  @Output() onFilter = new EventEmitter();
  filteredValues;
  constructor() {}

  ngOnInit() {}

  filterTableList(searchValue): void {
    this.filteredValues = this.listValues.filter(elem => {
      const rawData = elem.name.trim().toLowerCase();
      const searchText = searchValue.trim().toLowerCase();
      if (rawData.includes(searchText)) {
        return elem;
      }
    });
    this.onFilter.emit(this.filteredValues);
  }
}
