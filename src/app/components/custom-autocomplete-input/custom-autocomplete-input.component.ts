import { Component, OnInit, Input } from "@angular/core";

import { Error } from "app/models/input-error";
import { FormControl, ControlContainer } from "@angular/forms";
@Component({
  selector: "app-custom-autocomplete-input",
  templateUrl: "./custom-autocomplete-input.component.html",
  styleUrls: ["./custom-autocomplete-input.component.scss"]
})
export class CustomAutocompleteInputComponent implements OnInit {
  @Input() optionsArray: [];
  @Input() controlName: string;
  @Input() label: string;
  @Input() errors: Error[];
  control: FormControl;
  constructor(private controlContainer: ControlContainer) {}

  ngOnInit() {
    this.getValue();
  }

  getValue() {
    this.control = this.controlContainer.control.get(
      this.controlName
    ) as FormControl;
  }
}
