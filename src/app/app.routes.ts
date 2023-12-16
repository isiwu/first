import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

export const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent,
    title: 'login'
  },
  {
    path: 'auth/signup',
    component: SignupComponent,
    title: 'signup'
  },
  // {
  //   path: '',
  //   redirectTo: '/auth/login'
  // },
];
