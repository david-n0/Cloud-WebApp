import { TestBed } from '@angular/core/testing';

import { SearchNodeService } from './search-node.service';

describe('SearchNodeService', () => {
  let service: SearchNodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchNodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
