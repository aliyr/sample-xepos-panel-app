import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { UserManagementDetailsComponent } from "./pages/user-management/user-management-details/user-management-details.component";
import {
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatInputModule,
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
  MatBadgeModule,
  MatPaginatorIntl
} from "@angular/material";

import { MatIconModule } from "@angular/material/icon";
import { CustomMatPaginatorIntl } from "./ng-material-customizations/Custom-paginator-intl";
import { SubNavComponent } from "./components/sub-nav/sub-nav.component";
import { MatTreeModule } from "@angular/material/tree";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { UserManagementFormComponent } from "./pages/user-management/user-management-form/user-management-form.component";
import { UserManagementComponent } from "./pages/user-management/user-management.component";
import { ImageUploaderComponent } from "./components/image-uploader/image-uploader.component";
import { ListHeaderComponent } from "./components/list-header/list-header.component";
import { CompanyManagementComponent } from "./pages/company-management/company-management.component";
import { CompanyManagementFormComponent } from "./pages/company-management/company-management-form/company-management-form.component";
import { CompanyManagementDetailsComponent } from "./pages/company-management/company-management-details/company-management-details.component";
import { CompanyManagementWizardComponent } from "./pages/company-management/company-management-wizard/company-management-wizard.component";
import { SearchInputComponent } from "./components/search-input/search-input.component";
import { AgmCoreModule } from "@agm/core";
import { MultiSelectChipsComponent } from "./components/multi-select-chips/multi-select-chips.component";
import { CustomInputComponent } from "./components/custom-input/custom-input.component";
import { CustomOptionSelectComponent } from "./components/custom-options-select/custom-options-select.component";
import { CustomAutocompleteInputComponent } from "./components/custom-autocomplete-input/custom-autocomplete-input.component";
import { RegistersComponent } from "./pages/registers/registers.component";
import { RegistersDetailsComponent } from "./pages/registers/registers-details/registers-details.component";
import { RegistersFormComponent } from "./pages/registers/registers-form/registers-form.component";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { TimePickerComponent } from "./components/time-picker/time-picker.component";
import { DevicesDetailsComponent } from "./pages/devices/devices-details/devices-details.component";
import { DevicesFormComponent } from "./pages/devices/devices-form/devices-form.component";
import { DevicesComponent } from "./pages/devices/devices.component";
import { HttpClientModule } from "@angular/common/http";
import { CustomTableComponent } from "./components/custom-table/custom-table.component";
import { LicenseDetailsComponent } from "./pages/license-details/license-details.component";
import { DialogBoxComponent } from "./components/dialogs/license-paircode-dialog-box/generate-paircode.component";
import { DaysPickerComponent } from "./components/dialogs/days-picker/days-picker.component";
import { Ng5SliderModule } from "ng5-slider";
import { PanelComponent } from "./pages/panel/panel.component";
import { LocationsComponent } from "./pages/locations/locations.component";
import { LocationDetailsComponent } from "./pages/locations/location-details/location-details.component";
import { LocationFormComponent } from "./pages/locations/location-form/location-form.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    UserManagementDetailsComponent,
    SubNavComponent,
    UserManagementFormComponent,
    UserManagementComponent,
    ImageUploaderComponent,
    ListHeaderComponent,
    CompanyManagementComponent,
    CompanyManagementFormComponent,
    CompanyManagementDetailsComponent,
    CompanyManagementWizardComponent,
    SearchInputComponent,
    MultiSelectChipsComponent,
    CustomInputComponent,
    CustomOptionSelectComponent,
    CustomAutocompleteInputComponent,
    RegistersComponent,
    RegistersDetailsComponent,
    RegistersFormComponent,
    TimePickerComponent,
    DevicesDetailsComponent,
    DevicesFormComponent,
    DevicesComponent,
    CustomTableComponent,
    LicenseDetailsComponent,
    DialogBoxComponent,
    DaysPickerComponent,
    PanelComponent,
    LocationsComponent,
    LocationDetailsComponent,
    LocationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    HttpClientModule,
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
    Ng5SliderModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCeWFYR_9Kqa5Q0CH_KAWLfNrojB0LngrM"
    }),
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl }],
  bootstrap: [AppComponent],
  entryComponents: [DialogBoxComponent, DaysPickerComponent]
})
export class AppModule {}
