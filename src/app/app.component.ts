import { Component } from '@angular/core';
import { PasswordStrength } from 'src/types/passwordStrength';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'usense-test-task';
  passwordStrength = PasswordStrength.IDLE;
  passwordStrengthClasses = {
    idle: true,
    easy: false,
    medium: false,
    strong: false,
  };

  get passwordStrengthEnum() {
    return PasswordStrength;
  }

  validatePasswordStrength(value: string | null): void {
    if (!value) {
      this.passwordStrength = PasswordStrength.IDLE;
      return;
    }

    if (value.length < 8) {
      this.passwordStrength = PasswordStrength.BAD;
      return;
    }

    const strongValidation =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%#*?&])[A-Za-z\d@$!#%*?&]+$/;
    const mediumValidation =
      /((?=.*[A-Za-z])(?=.*[@$!%*?&]))|((?=.*[A-Za-z])(?=.*\d))|((?=.*\d)(?=.*[@$!%*?&]))/;

    if (strongValidation.test(value)) {
      this.passwordStrength = PasswordStrength.STRONG;
    } else if (mediumValidation.test(value)) {
      this.passwordStrength = PasswordStrength.MEDIUM;
    } else {
      this.passwordStrength = PasswordStrength.EASY;
    }
  }
}
