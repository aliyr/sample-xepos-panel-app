import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { UserManagementListComponent } from "./pages/user-management/user-management-list/user-management-list.component";
import { UserManagementFormComponent } from "./pages/user-management/user-management-form/user-management-form.component";
import { UserManagementComponent } from "./pages/user-management/user-management.component";
import { CompanyManagementComponent } from "./pages/company-management/company-management.component";
import { CompanyManagementDetailsComponent } from "./pages/company-management/company-management-details/company-management-details.component";
import { CompanyManagementFormComponent } from "./pages/company-management/company-management-form/company-management-form.component";
import { CompanyManagementWizardComponent } from "./pages/company-management/company-management-wizard/company-management-wizard.component";
import { DevicesFormComponent } from "app/pages/devices/devices-form/devices-form.component";
import { DevicesDetailsComponent } from "app/pages/devices/devices-details/devices-details.component";
import { DevicesComponent } from "app/pages/devices/devices.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "login", component: LoginComponent },
  { path: "sign-up", component: SignupComponent },
  {
    path: "user-management",
    component: UserManagementComponent,
    children: [
      { path: "", redirectTo: "details", pathMatch: "full" },
      { path: "form/:id", component: UserManagementFormComponent },
      { path: "details", component: UserManagementListComponent }
    ]
  },
  {
    path: "company-management",
    component: CompanyManagementComponent,
    children: [
      { path: "", redirectTo: "details", pathMatch: "full" },
      { path: "form/:id", component: CompanyManagementFormComponent },
      { path: "details", component: CompanyManagementDetailsComponent },
      { path: "wizard", component: CompanyManagementWizardComponent }
    ]
  },
  {
    path: "devices",
    component: DevicesComponent,
    children: [
      { path: "", redirectTo: "details", pathMatch: "full" },
      { path: "form/:id", component: DevicesFormComponent },
      { path: "details", component: DevicesDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
