import { Component } from '@angular/core';
import { User } from './auth-form/auth-form.interface';
@Component({
  selector: 'app-root',
  template: `
     <div>
      <app-auth-form
        (submitted)="createUser($event)">
        <h3>Create account</h3>
        <h4>ng-content is content projection</h4>
        <button type="submit">
          join us
        </button>
      </app-auth-form>
      <app-auth-form
        (submitted)="loginUser($event)">
        <h3>Login</h3>
        <h4>ng-content can change a piece of markup</h4>
        <app-auth-remember
          (checked)="rememberUser($event)"
        ></app-auth-remember>
        <app-auth-submit>
        </app-auth-submit>
      </app-auth-form>
    </div>
  `,
  styles: []
})
export class AppComponent {

  rememberMe = false;

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user);
    console.log(this.rememberMe);
  }

}
