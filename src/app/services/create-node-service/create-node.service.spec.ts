import { TestBed } from '@angular/core/testing';

import { CreateNodeService } from './create-node.service';

describe('CreateNodeService', () => {
  let service: CreateNodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateNodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
