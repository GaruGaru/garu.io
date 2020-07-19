import { TestBed, inject } from '@angular/core/testing';

import { PersonalProjectsService } from './personal-projects.service';

describe('SkillsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonalProjectsService]
    });
  });

  it('should be created', inject([PersonalProjectsService], (service: PersonalProjectsService) => {
    expect(service).toBeTruthy();
  }));
});
