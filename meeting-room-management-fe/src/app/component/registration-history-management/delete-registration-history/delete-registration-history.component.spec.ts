import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DeleteRegistrationHistoryComponent} from './delete-registration-history.component';

describe('DeleteRegistrationHistoryComponent', () => {
  let component: DeleteRegistrationHistoryComponent;
  let fixture: ComponentFixture<DeleteRegistrationHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRegistrationHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRegistrationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
