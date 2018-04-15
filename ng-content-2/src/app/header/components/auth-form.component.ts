import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../interfaces/auth-form.interface';
@Component({
  selector: 'app-auth-form',
  template: `
    <div>
       <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
          <div>
            <label>ID</label>
            <input type="text" name="email" [(ngModel)]="userId"/>
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" ngModel/>
          </div>
          <ng-content select="app-auth-remember">
          </ng-content>
          <ng-content select="app-auth-submit">
          </ng-content>
       </form>
    </div>
  `,
  styles: []
})
export class AuthFormComponent implements OnInit {
  userId: string;
  @Output() submitted = new EventEmitter<User>();

  ngOnInit() {
    this.userId = localStorage.getItem('userId');
  }
  onSubmit(value: User) {
    // form.value
    this.submitted.emit(value);
  }
}
