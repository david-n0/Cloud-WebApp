import { TestBed } from '@angular/core/testing';

import { ScheduleNodeService } from './schedule-node.service';

describe('ScheduleNodeService', () => {
  let service: ScheduleNodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleNodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
