import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StatisticRoomFormComponent} from './statistic-room-form.component';

describe('StatisticRoomFormComponent', () => {
  let component: StatisticRoomFormComponent;
  let fixture: ComponentFixture<StatisticRoomFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticRoomFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticRoomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
