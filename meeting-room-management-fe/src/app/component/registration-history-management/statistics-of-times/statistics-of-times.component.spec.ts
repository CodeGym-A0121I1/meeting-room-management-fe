import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StatisticsOfTimesComponent} from './statistics-of-times.component';

describe('StatisticsOfTimesComponent', () => {
  let component: StatisticsOfTimesComponent;
  let fixture: ComponentFixture<StatisticsOfTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsOfTimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsOfTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
