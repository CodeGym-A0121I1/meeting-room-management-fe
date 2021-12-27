import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsRoomTableComponent } from './statistics-room-table.component';

describe('StatisticsRoomTableComponent', () => {
  let component: StatisticsRoomTableComponent;
  let fixture: ComponentFixture<StatisticsRoomTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsRoomTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsRoomTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
