import { TestBed } from "@angular/core/testing";

import { UserManagementService } from "./user-management.service";

describe("UserManagementServiceService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: UserManagementService = TestBed.get(UserManagementService);
    expect(service).toBeTruthy();
  });
});
