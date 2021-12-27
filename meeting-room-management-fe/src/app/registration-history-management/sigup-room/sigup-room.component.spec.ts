import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigupRoomComponent } from './sigup-room.component';

describe('SigupRoomComponent', () => {
  let component: SigupRoomComponent;
  let fixture: ComponentFixture<SigupRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigupRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigupRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
