import {Component, OnInit} from '@angular/core';
import {QuantityCategory} from "../../../model/dto/QuantityCategory";
import {EquipmentService} from "../../../service/equipment.service";

@Component({
  selector: 'app-list-equipment-category',
  templateUrl: './list-equipment-category.component.html',
  styleUrls: ['./list-equipment-category.component.css']
})
export class ListEquipmentCategoryComponent implements OnInit {

  categoryDtoList: QuantityCategory | any;
  p: number | any;
  checkPagination = true;


  constructor(private equipmentService: EquipmentService) {
  }

  ngOnInit(): void {
    this.equipmentService.getAllCategoryQuantityStatusDto().subscribe(
      (data) => {
        this.categoryDtoList = data;
        if (data.length < 11) {
          this.checkPagination = false;
        }
      });
  }
}
