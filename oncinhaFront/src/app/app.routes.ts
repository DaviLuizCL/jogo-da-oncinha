import { Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';

export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: 'full' },
    { path: "login", component: LoginComponent },
    { path: "login", component: LoginComponent },
];
