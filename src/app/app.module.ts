import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { FormsModule } from '@angular/forms';

import { PasswordStrength } from 'src/types/passwordStrength';

@NgModule({
  declarations: [AppComponent, PasswordInputComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
