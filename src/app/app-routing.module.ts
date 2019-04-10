import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component'
import { LoginComponent } from './pages/login/login.component'
import { SignupComponent} from './pages/signup/signup.component'
import {UserManagementComponent} from './pages/user-management/user-management.component'

const routes: Routes = [
 { path: '' , component : DashboardComponent },
 { path: 'Login' , component :  LoginComponent},
 { path: 'Signup' , component : SignupComponent},
 { path: 'UserManagement' , component :  UserManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
