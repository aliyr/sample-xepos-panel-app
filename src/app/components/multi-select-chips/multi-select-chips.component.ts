import { Component, OnInit, Input } from "@angular/core";
import { ControlContainer, FormArray } from "@angular/forms";

@Component({
  selector: "app-multi-select-chips",
  templateUrl: "./multi-select-chips.component.html",
  styleUrls: ["./multi-select-chips.component.scss"]
})
export class MultiSelectChipsComponent implements OnInit {
  @Input() optionsArray: string[];
  @Input() controlName: string;
  @Input() inputLabel: string;
  isInputTouched: boolean = false;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit() {}

  validateUseroptions(userOptions, insertedOption): boolean {
    // check if the Option is valid or not
    const isOptionValid =
      this.optionsArray.find(p => p === insertedOption) !== undefined;
    let isOptionNonRepetitive = true;
    if (userOptions) {
      isOptionNonRepetitive =
        userOptions.find(p => p === insertedOption) === undefined;
    }
    return isOptionValid && isOptionNonRepetitive;
  }

  addToOptions(Option) {
    const usersOptions = this.controlContainer.control.get(this.controlName)
      .value as FormArray;
    const OptionInterAllowed = this.validateUseroptions(usersOptions, Option);

    if (OptionInterAllowed) {
      if (usersOptions.length === 0) {
        // if Options array doesn't existed
        this.controlContainer.control
          .get(this.controlName)
          .patchValue([Option]);
      } else {
        usersOptions.push(Option);
        this.controlContainer.control
          .get(this.controlName)
          .patchValue(usersOptions);
      }
    }
  }

  removeSelectedOptions(Option: string) {
    const selectedOptions: [] = this.controlContainer.control.get(
      this.controlName
    ).value;
    selectedOptions.map((p, index) => {
      if (p === Option) {
        selectedOptions.splice(index, 1);
        this.controlContainer.control
          .get(this.controlName)
          .patchValue(selectedOptions);
      }
    });
  }
}
