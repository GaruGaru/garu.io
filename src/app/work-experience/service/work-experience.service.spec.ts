import { TestBed, inject } from '@angular/core/testing';

import { WorkExperienceService } from './work-experience.service';

describe('WorkExperienceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkExperienceService]
    });
  });

  it('should be created', inject([WorkExperienceService], (service: WorkExperienceService) => {
    expect(service).toBeTruthy();
  }));
});
