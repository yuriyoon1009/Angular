import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// container
import { HeaderComponent } from './containers/header.component';
// component
import { AuthFormComponent } from './components/auth-form.component';
import { AuthRememberComponent } from './components/auth-remember.component';
import { AuthSubmitComponent } from './components/auth-submit.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AuthFormComponent,
    AuthRememberComponent,
    AuthSubmitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
