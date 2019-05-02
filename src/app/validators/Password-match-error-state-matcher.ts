import { ErrorStateMatcher } from "@angular/material";
import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";

export default class PasswordMatchErrorStateMatcher
  implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return (
      (control.touched && form.hasError("passwordsDoNotMatch")) ||
      (form.hasError("required") && control.touched)
    );
  }
}
