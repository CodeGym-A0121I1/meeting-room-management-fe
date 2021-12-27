import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEquipmentCategoryComponent } from './list-equipment-category.component';

describe('ListEquipmentCategoryComponent', () => {
  let component: ListEquipmentCategoryComponent;
  let fixture: ComponentFixture<ListEquipmentCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEquipmentCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEquipmentCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
