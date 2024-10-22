<<<<<<< HEAD
import { Routes } from '@angular/router';
import { CreateAccount } from './layout/createAccount/createAccount.component';
import { LoginComponent } from './layout/login/login.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthGuard } from './auth.guard'; 

export const routes: Routes = [
  { path: "", redirectTo: "auth", pathMatch: 'full' },
  { path: "auth", component: LoginComponent },
  { path: "createAccount", component: CreateAccount },
  {
    path: "user", 
    component: HomeComponent, 
    canActivate: [AuthGuard], 
    children: [
      { path: "home", component: HomeComponent },
    ]
  }
];
=======
import { Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';

export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: 'full' },
    { path: "login", component: LoginComponent },
    { path: "login", component: LoginComponent },
];
>>>>>>> main
