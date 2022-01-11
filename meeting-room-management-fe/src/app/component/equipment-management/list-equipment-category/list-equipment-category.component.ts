import {Component, OnInit} from '@angular/core';
import {ICategoryDto} from "../../../models/ICategoryDto";
import {EquipmentService} from "../../../service/equipment.service";
import {data} from "jquery";

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
      (data) => {this.categoryDtoList = data;
        console.log(this.categoryDtoList)}
    );
  }

}
