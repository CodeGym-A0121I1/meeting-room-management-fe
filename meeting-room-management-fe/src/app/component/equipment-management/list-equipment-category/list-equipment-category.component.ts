import {Component, OnInit} from '@angular/core';
import {EquipmentService} from "../../../service/equipment.service";
import {QuantityCategory} from "../../../model/DTO/QuantityCategory";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-equipment-category',
  templateUrl: './list-equipment-category.component.html',
  styleUrls: ['./list-equipment-category.component.css']
})
export class ListEquipmentCategoryComponent implements OnInit {

  categoryDtoList: QuantityCategory[] = [];
  p: number | any;

  constructor(private equipmentService: EquipmentService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.equipmentService.getAllCategoryQuantityStatusDto().subscribe(
      (data) => {
        this.categoryDtoList = data;
      });
  }

  listEquipemnt(idCategory: number) {
    // this.router.navigate(['/equipment/'+idCategory]);
    // location.reload();
    location.assign('/equipment/'+idCategory);
  }
}
