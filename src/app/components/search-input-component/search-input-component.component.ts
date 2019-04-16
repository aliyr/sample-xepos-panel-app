import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgLog} from '../../decorators/nglog.decorator';
import {User} from '../../models/User'

@Component({
  selector: 'app-search-input-component',
  templateUrl: './search-input-component.component.html',
  styleUrls: ['./search-input-component.component.scss']
})
@NgLog()
export class SearchInputComponentComponent implements OnInit {
  @Input() listValues : User[] ;
  @Output() onFilter = new EventEmitter();
  filteredValues: User[];
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
