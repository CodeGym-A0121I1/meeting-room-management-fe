import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelSignroomComponent } from './cancel-signroom.component';

describe('CancelSignroomComponent', () => {
  let component: CancelSignroomComponent;
  let fixture: ComponentFixture<CancelSignroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelSignroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelSignroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
