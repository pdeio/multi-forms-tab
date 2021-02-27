import { TestBed } from '@angular/core/testing';

import { MultiFormsTabService } from './multi-forms-tab.service';

describe('MultiFormsTabService', () => {
  let service: MultiFormsTabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiFormsTabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
