import {Component, OnInit} from '@angular/core';
import {ICategoryDto} from "../../../models/equipment/ICategoryDto";
import {EquipmentService} from "../../../service/equipment.service";

@Component({
  selector: 'app-list-equipment-category',
  templateUrl: './list-equipment-category.component.html',
  styleUrls: ['./list-equipment-category.component.css']
})
export class ListEquipmentCategoryComponent implements OnInit {

  categoryDtoList: ICategoryDto | any;


  constructor(private equipmentService: EquipmentService) { }

  ngOnInit(): void{
    this.equipmentService.getAllCategoryQuantityStatusDto().subscribe(
      (data) => {this.categoryDtoList = data});
  }
}
