import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleNodeComponent } from './schedule-node.component';

describe('ScheduleNodeComponent', () => {
  let component: ScheduleNodeComponent;
  let fixture: ComponentFixture<ScheduleNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleNodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
