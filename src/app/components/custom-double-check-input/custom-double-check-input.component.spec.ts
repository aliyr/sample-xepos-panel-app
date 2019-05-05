import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CustomDoubleCheckInputComponent } from "./custom-double-check-input.component";

describe("CustomDoubleCheckInputComponent", () => {
  let component: CustomDoubleCheckInputComponent;
  let fixture: ComponentFixture<CustomDoubleCheckInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomDoubleCheckInputComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDoubleCheckInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
