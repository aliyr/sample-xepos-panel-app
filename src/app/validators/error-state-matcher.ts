import {ErrorStateMatcher} from '@angular/material';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';

export default class ErrorStateValidator implements ErrorStateMatcher {
  public constructor(private errorCode: string) {}
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.dirty && form.hasError('passwordsDoNotMatch');
  }
}
