import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input-component',
  templateUrl: './search-input-component.component.html',
  styleUrls: ['./search-input-component.component.scss']
})
export class SearchInputComponentComponent implements OnInit {
  @Input() listValues;
  @Output() onFilter = new EventEmitter();
  filteredValues: [];
  constructor() {}

  ngOnInit() {}

  filterTableList(searchValue) {
    this.filteredValues = this.listValues.filter((elem) => {
      const rawData = elem.name.trim().toLowerCase();
      const searchText = searchValue.trim().toLowerCase();
      if (rawData.includes(searchText)) {
        return elem;
      }
    });
    this.onFilter.emit(this.filteredValues);
  }
}
