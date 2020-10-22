import { TestBed } from '@angular/core/testing';

import { RenderingSubjectsService } from './rendering-subjects.service';

describe('RenderingSubjectsService', () => {
  let service: RenderingSubjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenderingSubjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
