import { Component, Output, EventEmitter } from '@angular/core';

import { PasswordStrength } from 'src/types/passwordStrength';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
})
export class PasswordInputComponent {
  value = '';

  @Output()
  validate: EventEmitter<string> = new EventEmitter();

  onValidate() {
    this.validate.emit(this.value);
  }
}
