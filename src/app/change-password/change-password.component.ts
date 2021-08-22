import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangePasswordValidator } from '../common/validators/change-password.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  // public changePasswordForm : FormGroup;

  public changePasswordForm: FormGroup
  public passwordUpdateSuccess : boolean;

  constructor(fb: FormBuilder, private router : Router) {
    this.passwordUpdateSuccess = false;
    this.changePasswordForm = fb.group({
      oldPassword: ['', Validators.required, ChangePasswordValidator.oldPasswordMatch],
      newPassword: ['', [Validators.required, Validators.pattern('(?=.*?[a-z])(?=.*?[\\d])(?=.*?[@#\$\^&]).{8,15}')]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: ChangePasswordValidator.confirmPasswordMatch
    }
    )
  }

  get oldPassword() {
    return this.changePasswordForm.get('oldPassword')
  }

  get newPassword() {
    return this.changePasswordForm.get('newPassword')
  }

  get confirmPassword() {
    return this.changePasswordForm.get('confirmPassword')
  }

  log(ele) {
    console.log(ele.errors)
  }

  changePassword() {
    console.log(`${this.oldPassword} changed to ${this.newPassword}`)
    this.passwordUpdateSuccess = true
    setTimeout(() => {
      this.passwordUpdateSuccess = false
      this.router.navigate(["/courses"])
    }, 4000)
  }
}
