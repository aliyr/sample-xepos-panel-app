import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-multi-select-chips',
  templateUrl: './multi-select-chips.component.html',
  styleUrls: ['./multi-select-chips.component.scss']
})
export class MultiSelectChipsComponent implements OnInit {
  locations: string[] = ["address1", "address"];
  constructor() { }

  ngOnInit() {
  }
  validateUserLocations(userLocations, insertedLocation): boolean {
    // check if the location is valid or not
    const isLocationValid =
      this.locations.find(p => p === insertedLocation) !== undefined;
    let isLocationNonRepetitive = true;
    if (userLocations) {
      isLocationNonRepetitive =
        userLocations.find(p => p === insertedLocation) === undefined;
    }
    return isLocationValid && isLocationNonRepetitive;
  }

  addToLocations(location) {
    const usersLocations = this.profileForm.get("locations").value as FormArray;
    const LocationInterAllowed = this.validateUserLocations(
      usersLocations,
      location
    );

    if (LocationInterAllowed) {
      if (usersLocations.length === 0) {
        // if locations array doesn't existed
        this.profileForm.get("locations").patchValue([location]);
      } else {
        usersLocations.push(location);
        this.profileForm.get("locations").patchValue(usersLocations);
      }
    }
  }
  removeSelectedLocations(location) {
    const selectedLocations: [] = this.profileForm.get("locations").value;
    selectedLocations.map((p, index) => {
      if (p === location) {
        selectedLocations.splice(index, 1);
        this.profileForm.get("locations").patchValue(selectedLocations);
      }
    });
  }
}
