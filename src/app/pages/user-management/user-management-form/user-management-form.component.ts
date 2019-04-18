import { Component, OnInit } from '@angular/core';
import {MatChipInputEvent} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-user-management-form',
  templateUrl: './user-management-form.component.html',
  styleUrls: ['./user-management-form.component.scss']
})

export class UserManagementFormComponent implements OnInit {
chipsLocations :string[] =[
  'address1',
  'address'
];
dropDownLocations : string[] = [
  'address1',
  'address'
]

myControl = new FormControl();
options: string[] = ['One', 'Two', 'Three'];
check : boolean = true
  constructor() { 
  } 

  ngOnInit() {
  }
  removable = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  remove(locations :string): void {
    const index = this.chipsLocations.indexOf(locations);

    if (index >= 0) {
      this.chipsLocations.splice(index, 1);
    }
  }
  addTOChips(chosenLocation : string){
    this.chipsLocations.push(chosenLocation)
  }
}
