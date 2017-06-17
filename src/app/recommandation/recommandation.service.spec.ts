import { TestBed, inject } from '@angular/core/testing';

import { RecommandationService } from './recommandation.service';

describe('RecommandationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecommandationService]
    });
  });

  it('should be created', inject([RecommandationService], (service: RecommandationService) => {
    expect(service).toBeTruthy();
  }));
});
