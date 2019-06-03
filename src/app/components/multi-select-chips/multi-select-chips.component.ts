import { Component, OnInit, Input } from "@angular/core";
import { FormControl, ControlContainer } from "@angular/forms";

@Component({
  selector: "app-multi-select-chips",
  templateUrl: "./multi-select-chips.component.html",
  styleUrls: ["./multi-select-chips.component.scss"]
})
export class MultiSelectChipsComponent implements OnInit {
  @Input() optionsArray: string[];
  @Input() controlName: string;
  @Input() inputLabel: string;
  @Input() isRequired: boolean;
  control: FormControl;
  isInputTouched: boolean;
  filteredOptions: string[];
  // workaround
  // problem with list error
  // errors are not shown like other errors

  constructor(private controlContainer: ControlContainer) {
    this.isRequired = false;
  }

  ngOnInit() {
    this.filteredOptions = this.optionsArray;
    this.control = this.controlContainer.control.get(
      this.controlName
    ) as FormControl;
    this.control.patchValue([]);
  }

  public _filter(value: string) {
    const filterValue = value.toLowerCase();

    this.filteredOptions = this.optionsArray.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  validateUseroptions(userOptions: string[], insertedOption: string): boolean {
    // check if the Option is valid or not
    let isOptionNonRepetitive = true;
    let isOptionValid: boolean;
    if (this.optionsArray) {
      isOptionValid =
        this.optionsArray.find(p => p === insertedOption) !== undefined;
    } else {
      isOptionValid = true;
    }

    if (userOptions) {
      isOptionNonRepetitive =
        userOptions.find(p => p === insertedOption) === undefined;
    }
    return isOptionValid && isOptionNonRepetitive;
  }

  addToOptions(Option: string) {
    const usersOptions: string[] = this.control.value;
    const OptionInterAllowed = this.validateUseroptions(usersOptions, Option);
    if (OptionInterAllowed) {
      usersOptions.push(Option);
      this.control.patchValue(usersOptions);
    }
  }

  removeSelectedOptions(Option: string) {
    const selectedOptions: string[] = this.control.value;
    selectedOptions.map((p, index) => {
      if (p === Option) {
        selectedOptions.splice(index, 1);
        this.control.patchValue(selectedOptions);
      }
    });
  }
}
