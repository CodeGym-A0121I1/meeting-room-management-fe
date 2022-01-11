import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StatisticsTimeTableComponent} from './statistics-time-table.component';

describe('StatisticsTimeTableComponent', () => {
  let component: StatisticsTimeTableComponent;
  let fixture: ComponentFixture<StatisticsTimeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsTimeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsTimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
