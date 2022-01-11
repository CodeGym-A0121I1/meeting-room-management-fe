import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListRegistrationHistoryComponent} from './list-registration-history.component';

describe('ListRegistrationHistoryComponent', () => {
  let component: ListRegistrationHistoryComponent;
  let fixture: ComponentFixture<ListRegistrationHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRegistrationHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRegistrationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
