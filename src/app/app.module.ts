import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserManagementListComponent } from './pages/user-management/user-management-list/user-management-list.component';
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
import {CustomMatPaginatorIntl} from './ngMaterialCustomization/CustomMatPaginatorIntl';
import { SubNavComponent } from './components/subNav/sub-nav.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
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
import { UserManagementFormComponent } from './pages/user-management/user-management-form/user-management-form.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { ListHeaderComponent } from './components/list-header/list-header.component';
import { CompanyDetailsComponent } from './pages/company-details/company-details.component';
import { CompanyDetailsFormComponent } from './pages/company-details/company-details-form/company-details-form.component';
import { CompanyDetailsListComponent } from './pages/company-details/company-details-list/company-details-list.component';
import { CompanyDetailsWizardComponent } from './pages/company-details/company-details-wizard/company-details-wizard.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import {AgmCoreModule} from '@agm/core';
import { MultiSelectChipsComponent } from './components/multi-select-chips/multi-select-chips.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    UserManagementListComponent,
    SubNavComponent,
    UserManagementFormComponent,
    UserManagementComponent,
    ImageUploaderComponent,
    ListHeaderComponent,
    CompanyDetailsComponent,
    CompanyDetailsFormComponent,
    CompanyDetailsListComponent,
    CompanyDetailsWizardComponent,
    SearchInputComponent,
    MultiSelectChipsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
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
    MatBottomSheetModule,
    FormsModule,
    MatToolbarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCeWFYR_9Kqa5Q0CH_KAWLfNrojB0LngrM'
    })
  ],
  providers: [
    { provide: CustomMatPaginatorIntl , useClass: CustomMatPaginatorIntl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
