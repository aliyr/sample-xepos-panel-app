import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CustomAutocompleteInputComponent } from "./custom-autocomplete-input.component";

describe("CustomAutocompleteInputComponent", () => {
  let component: CustomAutocompleteInputComponent;
  let fixture: ComponentFixture<CustomAutocompleteInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomAutocompleteInputComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAutocompleteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
