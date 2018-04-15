import { Component, OnInit, Input } from '@angular/core';
import { User } from '../interfaces/auth-form.interface';
@Component({
  selector: 'app-header',
  template: `
    <div>
        header
        <app-auth-form
          (submitted)="createUser($event)"
        >
          <!--remember-->
          <app-auth-remember
           (checked)="rememberUser($event)">
          </app-auth-remember>
          <!--remember-->
          <!--submit-->
          <app-auth-submit>
          </app-auth-submit>
          <!--submit-->
        </app-auth-form>
    </div>
  `,
  styles: []
})
export class HeaderComponent  {
  rememberMe = false;
  userId: string;
  rememberUser(emittedRemember: boolean) {
    this.rememberMe = emittedRemember;
  }

  createUser(value: User) {
    console.log(value);
    console.log(value.email, value.password);
    console.log(this.rememberMe);

    if (this.rememberMe && value.email) {
      this.userId = value.email;
      localStorage.setItem('userId', this.userId);
    } else {
      localStorage.clear();
    }
  }
}
