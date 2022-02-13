import {Component, OnInit} from '@angular/core';
import {EquipmentService} from "../../../service/equipment.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DeleteEquipmentComponent} from "../delete-equipment/delete-equipment.component";
import {UpdateEquipmentComponent} from "../update-equipment/update-equipment.component";
import {Equipment} from "../../../model/equipment/Equipment";
import {Status} from "../../../model/Status";
import {data} from "jquery";

@Component({
  selector: 'app-list-equipment',
  templateUrl: './list-equipment.component.html',
  styleUrls: ['./list-equipment.component.css']
})
export class ListEquipmentComponent implements OnInit {

  equipmentList: Equipment[] | any;
  idCategory: number | any;
  p: number | any;
  eStatus = Status;
  equipment: | any;

  constructor(private equipmentService: EquipmentService,
              private activatedRoute: ActivatedRoute,
              private matDialog: MatDialog,
              private snackbar: MatSnackBar){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (paramMap: ParamMap) => {
        this.idCategory = paramMap.get('idCategory');
        this.equipmentService.getAllEquipmentByCategoryId(this.idCategory).subscribe(
          (data) => {
            this.equipmentList = data;
          }
        );
      }
    )
  }

  openDialogDelete(id: string) {
    this.equipmentService.getEquipmentById(id).subscribe(
      (data) => {
        this.equipment = data;
        const dialog = this.matDialog.open(DeleteEquipmentComponent, {
          data: this.equipment,
          width: '500px',
        });
        dialog.afterClosed().subscribe(isResult => {
            if (isResult) {
              this.equipmentService.deleteEquipment(this.equipment.id).subscribe(
                () => {
                  this.snackbar.open("Đã xóa tài sản " + this.equipment.name, "OK", {
                    panelClass: ['mat-toolbar', 'mat-warn'],
                    duration: 3000
                  });
                  this.p = 1;
                  this.ngOnInit();
                }
              );
            }
          }
        )
      }
    );

  }

  openDialogEdit(equipment: Equipment) {
    const dialog = this.matDialog.open(UpdateEquipmentComponent, {
      width: '600px',
      data: equipment,
    });
    dialog.afterClosed().subscribe(() => {
      this.ngOnInit();
    })
  }

  search(nameEquipmentSearch: string) {
    if (nameEquipmentSearch == "") {
      this.snackbar.open("Bạn chưa nhập dữ liệu tìm kiếm !", "Đóng", {
        duration: 3000
      })
      this.ngOnInit();
    } else {
      this.equipmentService.getAllEquipmentByCategoryIdAndNameLike(this.idCategory, nameEquipmentSearch).subscribe(
        (data) => {
          this.equipmentList = data;
          this.snackbar.open("Tìm thấy " + data.length + " kết quả phù hợp ", "Đóng", {
            duration: 3000,
            panelClass: ['mat-toolbar', 'mat-primary']
          })
        },
        (error) => {
          if (error.status == 404) {
            this.snackbar.open("Không tìm thấy kết quả phù hợp !", "Đóng", {
              duration: 3000
            });
          } else {
            this.snackbar.open("Không có dữ liệu !!!", "Đóng", {
              duration: 3000
            });
          }
          this.ngOnInit();
        }
      );
    }
    this.p = 1;
  }

}
