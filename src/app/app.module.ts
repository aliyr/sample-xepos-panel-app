import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import {
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatInputModule,
  MatPaginatorIntl,
  MatSidenavModule,
  MatTooltipModule,
  MatTabsModule,
  MatStepperModule,
  MatSliderModule,
  MatSelectModule,
  MatRippleModule,
  MatRadioModule,
  MatNativeDateModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatDialogModule,
  MatChipsModule,
  MatCardModule,
  MatButtonModule,
  MatBadgeModule
} from '@angular/material';

import {MatIconModule} from '@angular/material/icon';
import { SearchInputComponentComponent } from './components/search-input-component/search-input-component.component';
import {CustomMatPaginatorIntl} from './ngMaterialCustomization/CustomMatPaginatorIntl';
import { SubNavComponent } from './components/subNav/sub-nav.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    UserManagementComponent,
    SearchInputComponentComponent,
    SubNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatTreeModule,
    MatBottomSheetModule
  ],
  providers: [
    { provide: CustomMatPaginatorIntl , useClass: CustomMatPaginatorIntl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
