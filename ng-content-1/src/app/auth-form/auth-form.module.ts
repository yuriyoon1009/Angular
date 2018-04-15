
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthFormComponent } from './auth-form.component';
import { AuthRememberComponent } from './auth-remember.component';
import { AuthSubmitComponent } from './auth-submit.component';
@NgModule({
  declarations: [
    AuthFormComponent,
    AuthRememberComponent,
    AuthSubmitComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AuthFormComponent,
    AuthRememberComponent,
    AuthSubmitComponent
  ]
})
export class AuthFormModule { }
