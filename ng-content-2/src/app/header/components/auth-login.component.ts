import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auth-login',
  template: `
    <div>
      <label>아이디 저장</label>
      <input type="checkbox" (change)="onChecked($event.target.checked)">
    </div>
  `
})
export class AuthRememberComponent {

  @Output() checked = new EventEmitter<boolean>();

  onChecked(value: boolean) {
    this.checked.emit(value);
  }

}
