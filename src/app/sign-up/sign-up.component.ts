import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidator } from './username.validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public form: FormGroup;
  public registerPending: boolean;

  constructor() {
    this.registerPending = false;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      account: new FormGroup({
        username: new FormControl('', [Validators.required, UsernameValidator.cannotContainSpace], UsernameValidator.shouldBeUnique),
        password: new FormControl('', [Validators.required, Validators.minLength(9), Validators.pattern('(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,13}'), Validators.maxLength(15)])
      })
    })
  }

  get username() {
    return this.form.get('account.username')
  }

  get password() {
    return this.form.get('account.password')
  }

  registerUser() {
    this.registerPending = true;
    setTimeout(() => {
      this.form.setErrors({
        invalidLogin: true
      })
      this.registerPending = false;
    }, 2000)
  }
}
