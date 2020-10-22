import { TestBed } from '@angular/core/testing';

import { SpriteRepositoryService } from './sprite-repository.service';

describe('SpriteRepositoryService', () => {
  let service: SpriteRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpriteRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
