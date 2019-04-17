import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { UserManagementListComponent } from "./pages/user-management/user-management-list/user-management-list.component";
import {UserManagementFormComponent} from './pages/user-management/user-management-form/user-management-form.component';
import {UserManagementComponent} from './pages/user-management/user-management.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "login", component: LoginComponent },
  { path: "sign-up", component: SignupComponent },
  {
    path: "user-management", component: UserManagementComponent,
    children: [
      { path: "", redirectTo: 'list', pathMatch: 'full' },
      { path: "form/:id", component: UserManagementFormComponent },
      { path: "list", component: UserManagementListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
