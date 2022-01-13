import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IEquipment} from "../../../models/equipment/IEquipment";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ListEquipmentComponent} from "../list-equipment/list-equipment.component";
import {EquipmentService} from "../../../service/equipment.service";

@Component({
  selector: 'app-update-equipment',
  templateUrl: './update-equipment.component.html',
  styleUrls: ['./update-equipment.component.css']
})
export class UpdateEquipmentComponent implements OnInit {

  status: string | any;
  statusList: string[][] = [['FIXING', 'Đang sửa'], ['USING', 'Đang sử dụng'], ['AVAILABLE', 'Khả dụng']];

  constructor(@Inject(MAT_DIALOG_DATA) public equipment: IEquipment,
              private snackbar: MatSnackBar,
              private dialog: MatDialogRef<ListEquipmentComponent>,
              private equipmentService: EquipmentService) {
  }


  ngOnInit(): void {
  }

  changeStatus(status: string) {
    this.status = status;
  }

  update() {
    if (this.status == this.equipment.status || this.status === undefined) {
      this.snackbar.open('Trạng thái của ' + this.equipment.name + ' chưa được thay đổi !', 'Đóng', {
        duration: 3000
      });
    } else {
      this.equipment.status = this.status;
      this.equipmentService.updateStatusEquipment(this.equipment).subscribe(
        () => {
          this.snackbar.open('Trạng thái của ' + this.equipment.name + ' đã được thay đổi thành ' + this.status, 'Đóng', {
            duration: 3000,
            panelClass: ['mat-toolbar', 'mat-primary']
          });
          this.dialog.close();
        }
      );
    }
  }
}
