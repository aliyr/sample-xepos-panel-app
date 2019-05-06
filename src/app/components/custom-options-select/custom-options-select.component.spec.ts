import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CustomOptionSelectComponent } from "./custom-options-select.component";

describe("CustomOptionSelectComponent", () => {
  let component: CustomOptionSelectComponent;
  let fixture: ComponentFixture<CustomOptionSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomOptionSelectComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomOptionSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
