import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {IEquipment} from "../../../models/equipment/IEquipment";

@Component({
  selector: 'app-delete-equipment',
  templateUrl: './delete-equipment.component.html',
  styleUrls: ['./delete-equipment.component.css']
})
export class DeleteEquipmentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public equipment: IEquipment) { }

  ngOnInit(): void {
  }

}
