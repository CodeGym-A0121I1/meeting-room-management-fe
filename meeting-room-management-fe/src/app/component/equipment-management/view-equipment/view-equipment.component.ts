import {Component, OnInit} from '@angular/core';
import {EquipmentService} from "../../../service/equipment.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-equipment',
  templateUrl: './view-equipment.component.html',
  styleUrls: ['./view-equipment.component.css']
})
export class ViewEquipmentComponent implements OnInit {

  constructor(private equipmentService: EquipmentService, private activatedRoute:ActivatedRoute) { }
  equipment:any;
  errors: string = '';

  ngOnInit(): void {
    this.equipmentService.getEquipmentById(this.activatedRoute.snapshot.params['idEquipment']).subscribe((data: any) => {
        this.equipment = data;
        console.log(data);
      }, error => this.errors = error
    )
  }

}
