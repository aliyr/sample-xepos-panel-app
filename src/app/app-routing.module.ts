import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { UserManagementListComponent } from "./pages/user-management/user-management-list/user-management-list.component";
import {UserManagementFormComponent} from './pages/user-management/user-management-form/user-management-form.component';
import {UserManagementComponent} from './pages/user-management/user-management.component';
import {CompanyDetailsComponent } from './pages/company-details/company-details.component';
import {CompanyDetailsListComponent} from './pages/company-details/company-details-list/company-details-list.component';
import {CompanyDetailsFormComponent} from './pages/company-details/company-details-form/company-details-form.component';
import {CompanyDetailsWizardComponent} from './pages/company-details/company-details-wizard/company-details-wizard.component';

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
  },
  {
    path: "company-details", component: CompanyDetailsComponent,
    children: [
      { path: "", redirectTo: 'list', pathMatch: 'full' },
      { path: "form/:id", component: CompanyDetailsFormComponent },
      { path: "list", component: CompanyDetailsListComponent },
      { path: "wizard", component:CompanyDetailsWizardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
