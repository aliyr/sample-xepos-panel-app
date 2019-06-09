import { Component, OnInit, Input } from "@angular/core";
import { map, startWith } from "rxjs/operators";
import { Observable } from "rxjs";

import { Error } from "app/models/input-error";
import { FormControl, ControlContainer } from "@angular/forms";
@Component({
  selector: "app-custom-autocomplete-input",
  templateUrl: "./custom-autocomplete-input.component.html",
  styleUrls: ["./custom-autocomplete-input.component.scss"]
})
export class CustomAutocompleteInputComponent implements OnInit {
  @Input() optionsArray: string[];
  @Input() controlName: string;
  @Input() label: string;
  @Input() errors: Error[];
  control: FormControl;
  filteredOptions: Observable<string[]>;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit() {
    this.getValue();

    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.optionsArray.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }
  getValue() {
    this.control = this.controlContainer.control.get(
      this.controlName
    ) as FormControl;
  }
  checkValue(chosenValue) {
    const result = this.optionsArray.find(data => {
      return data === chosenValue.value;
    });
    if (!result) {
      this.control.patchValue("");
      chosenValue.value = "";
    }
  }
}
