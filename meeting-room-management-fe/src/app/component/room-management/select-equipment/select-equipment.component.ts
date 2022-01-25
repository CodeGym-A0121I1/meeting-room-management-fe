import {Component, Inject, OnInit} from '@angular/core';
import * as $ from 'jquery'
import 'bootstrap'
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CategoryDTO} from "../../../model/dto/CategoryDTO";
import {EquipmentService} from "../../../service/equipment.service";
import {Equipment} from "../../../model/equipment/Equipment";
import {Category} from "../../../model/equipment/Category";

@Component({
  selector: 'app-select-equipment',
  templateUrl: './select-equipment.component.html',
  styleUrls: ['./select-equipment.component.css']
})
export class SelectEquipmentComponent implements OnInit {

  component: this
  curPage: number | string;
  categoryWithEquipmentList: Array<CategoryDTO>;
  categoryWithEquipmentListDuplicate: Array<CategoryDTO>;
  categoryList: Array<Category>;
  oldSelectedEquipments: Array<Equipment> = [] //list get from form add/update
  newSelectedEquipments: Array<Equipment> = [] //list will return to form
  mapEquipmentCheckbox: Map<string, boolean> = new Map<string, boolean>();
  mapCategoryCheckbox: Map<string, boolean> = new Map<string, boolean>();
  searchName: string = "";
  searchCategory: number = 0;

  constructor(
    private matDialogRef: MatDialogRef<SelectEquipmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [Array<Equipment>, string],
    private equipmentService: EquipmentService
  ) {
  }

  ngOnInit(): void {
    this.equipmentService.getAllCategory().subscribe(
      data => this.categoryList = data
    );
    this.oldSelectedEquipments = Object.assign([], this.data[0]);
    this.equipmentService.getAllCategoryWithEquipment(this.data[1]).subscribe(
      data => {
        this.categoryWithEquipmentList = data;
        this.categoryWithEquipmentListDuplicate = this.categoryWithEquipmentList
        for (const category of this.categoryWithEquipmentList) {
          this.mapCategoryCheckbox.set('check' + category.id, true);
          for (const equipment of category.equipmentList) {
            this.mapEquipmentCheckbox.set(equipment.id, false);
          }
        }
        for (const equipment of this.oldSelectedEquipments) {
          if (this.mapEquipmentCheckbox.has(equipment.id)) {
            this.mapEquipmentCheckbox.set(equipment.id, true);
          }
        }
        this.setupCheckbox();
      },
      () => this.categoryWithEquipmentList = []
    )
  }

  cancel() {
    this.newSelectedEquipments = Object.assign([], this.oldSelectedEquipments);
    this.matDialogRef.close(this.oldSelectedEquipments);
  }

  openRow(): void {
    $(function () {
      $('.collapse').collapse('hide');
    })
  }

  isChecked(equipmentId: string) {
    return this.mapEquipmentCheckbox.get(equipmentId);
  }

  checkAll(checkALl: string): void {

    for (const category of this.categoryWithEquipmentListDuplicate) {
      if ('check' + category.id == checkALl) {
        let value = !this.mapCategoryCheckbox.get('check' + category.id);
        this.mapCategoryCheckbox.set('check' + category.id, value);

        for (const equipment of category.equipmentList) {
          this.mapEquipmentCheckbox.set(equipment.id, value);
        }
      }
    }
  }

  setupCheckbox() {
    for (const category of this.categoryWithEquipmentListDuplicate) {
      this.mapCategoryCheckbox.set('check' + category.id, true);
      for (const equipment of category.equipmentList) {
        if (!this.isChecked(equipment.id)) {
          this.mapCategoryCheckbox.set('check' + equipment.category.id, false);
          break;
        }
      }
    }
  }

  selectEquipment(equipment: Equipment) {
    if (this.isChecked(equipment.id)) {
      this.mapEquipmentCheckbox.set(equipment.id, false);
    } else {
      this.mapEquipmentCheckbox.set(equipment.id, true);
    }
    this.setupCheckbox()
  }

  confirm() {
    for (const category of this.categoryWithEquipmentListDuplicate) {
      for (const equipment of category.equipmentList) {
        if (this.mapEquipmentCheckbox.get(equipment.id)) {
          this.newSelectedEquipments.push(equipment);
        }
      }
    }
    this.matDialogRef.close(this.newSelectedEquipments);
  }

  search() {
    this.equipmentService.searchByNameAndCategory(this.searchName, this.searchCategory).subscribe(
      data => {
        this.categoryWithEquipmentList = data;
        this.curPage = 1;
      },
      () => this.categoryWithEquipmentList = []
    )
  }
}
