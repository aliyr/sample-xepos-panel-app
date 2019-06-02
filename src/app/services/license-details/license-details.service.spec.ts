import { TestBed } from "@angular/core/testing";

import { LicenseDetailsService } from "./license-details.service";

describe("LicenseDetailsService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: LicenseDetailsService = TestBed.get(LicenseDetailsService);
    expect(service).toBeTruthy();
  });
});
