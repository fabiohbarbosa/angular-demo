import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { getFormValidationErrors } from 'src/app/auth/get-form-validation-errors';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(loginForm) {
    const errors = getFormValidationErrors(loginForm);
    if (!errors.invalid) {
      this.authService.login();
      return;
    }

    this.toastr.error(this.buildErrorMessage(errors), 'Error');
  }

  buildErrorMessage(errors) {
    const errorsMessage = {
      username: 'Username is not valid. Please inform your e-mail address',
      password: 'Password must have 6 or more characters'
    }

    return Object.keys(errors).reduce((previous, current) => {
      if (!errorsMessage[current]) return;
      previous = `${previous}\n\n${errorsMessage[current]}`;
      return previous;
    }, '');
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }
}
