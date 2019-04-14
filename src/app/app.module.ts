import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import {MatTableModule , MatSortModule, MatPaginatorModule , MatInputModule , MatPaginatorIntl  } from '@angular/material';
import { SearchInputComponentComponent } from './components/search-input-component/search-input-component.component';
import {CustomMatPaginatorIntl} from './ngMaterialCustomization/CustomMatPaginatorIntl';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    UserManagementComponent,
    SearchInputComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
  ],
  providers: [
    { provide: CustomMatPaginatorIntl , useClass: CustomMatPaginatorIntl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
