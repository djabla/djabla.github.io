import { TestBed } from '@angular/core/testing';

import { ProjectImgsService } from './project-imgs.service';

describe('ProjectImgsService', () => {
  let service: ProjectImgsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectImgsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
