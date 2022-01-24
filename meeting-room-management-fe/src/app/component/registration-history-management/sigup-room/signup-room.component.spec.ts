import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SignupRoomComponent} from './signup-room.component';

describe('SigupRoomComponent', () => {
  let component: SignupRoomComponent;
  let fixture: ComponentFixture<SignupRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupRoomComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
