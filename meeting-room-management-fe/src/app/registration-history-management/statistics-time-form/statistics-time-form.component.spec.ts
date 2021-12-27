import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsTimeFormComponent } from './statistics-time-form.component';

describe('StatisticsTimeFormComponent', () => {
  let component: StatisticsTimeFormComponent;
  let fixture: ComponentFixture<StatisticsTimeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsTimeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsTimeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
