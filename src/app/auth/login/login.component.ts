import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, UpperCasePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // email = '';
  // password = '';
  loginform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  router = new Router();
  handleSubmit() {
    console.log(this.loginform.value.email, this.loginform.value.password);
    this.router.navigateByUrl('auth/signup');
  }
}
