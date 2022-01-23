import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ListEquipmentComponent} from "../list-equipment/list-equipment.component";
import {EquipmentService} from "../../../service/equipment.service";
import {Equipment} from "../../../model/equipment/Equipment";
import {Status} from "../../../model/room/Status";

@Component({
  selector: 'app-update-equipment',
  templateUrl: './update-equipment.component.html',
  styleUrls: ['./update-equipment.component.css']
})

export class UpdateEquipmentComponent implements OnInit {

  status: string[] | any;
  statusArr: string[][] = [['FIXING', 'Đang sửa'], ['USING', 'Đang sử dụng'], ['AVAILABLE', 'Khả dụng']];

  eStatus = Status;

  constructor(@Inject(MAT_DIALOG_DATA) public equipment: Equipment,
              private snackbar: MatSnackBar,
              private dialog: MatDialogRef<ListEquipmentComponent>,
              private equipmentService: EquipmentService) {
  }


  ngOnInit(): void {}

  changeStatus(status: string) {
    this.status = status.split(',');
  }

  getNameStatus(status: string){
    for (let s of this.statusArr) {
      if (s[0] === status) {
        return s[1];
      }
    }
    return null;
  };

  update() {
    if (this.status == undefined || this.status[0] == this.equipment.status) {
      this.snackbar.open('Trạng thái ' + this.getNameStatus(this.equipment.status) +' của ' + this.equipment.name + ' chưa được thay đổi !', 'Đóng', {
        duration: 3000
      });
    } else {
      // this.equipment.status = this.status;
      this.equipmentService.updateStatusEquipment(this.equipment.id, this.status[0]).subscribe(
        () => {
          this.snackbar.open('Trạng thái ' + this.getNameStatus(this.equipment.status) +' của ' + this.equipment.name + ' đã được thay đổi thành ' + this.status[0], 'Đóng', {
            duration: 3000,
            panelClass: ['mat-toolbar', 'mat-primary']
          });
          this.dialog.close();
        }
      );
    }
  }
}
