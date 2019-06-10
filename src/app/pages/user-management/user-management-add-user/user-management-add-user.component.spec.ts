import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UsermanagementAddUserComponent } from "./user-management-add-user.component";

describe("UsermanagementAddUserComponent", () => {
  let component: UsermanagementAddUserComponent;
  let fixture: ComponentFixture<UsermanagementAddUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsermanagementAddUserComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermanagementAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
