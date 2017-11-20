import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors} from '@angular/forms';

@Directive({
  selector: '[appMatch]',
  providers: [{provide: NG_VALIDATORS, useExisting: MatchValidatorDirective, multi: true}]
})
export class MatchValidatorDirective {

  @Input() appMatch: string;
  validate(control: AbstractControl): ValidationErrors {
    const currentValue = control.value;
    // console.log('currentValue: ' + currentValue + '  matcher: ' + this.appMatch);
    const isValid = currentValue === this.appMatch;
    return isValid ? null : {
      appMatch : {
        valid : false
      }
    };
  }

  constructor() { }

}
