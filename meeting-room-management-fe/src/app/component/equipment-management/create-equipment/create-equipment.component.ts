import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import {EquipmentService} from "../../../service/equipment.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ICategory} from "../../../models/equipment/ICategory";

@Component({
  selector: 'app-create-equipment',
  templateUrl: './create-equipment.component.html',
  styleUrls: ['./create-equipment.component.css']
})
export class CreateEquipmentComponent implements OnInit {

  // @ts-ignore
  formCreateEquipment: FormGroup;

  constructor(
    private equipmentService: EquipmentService,
    private formBuilder: FormBuilder,
    private matDialog: MatDialog,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  categoryList: Array<ICategory> = [];

  ngOnInit(): void {
    this.formCreateEquipment = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(10000), Validators.max(500000)]],
      category: [this.categoryList[0], [Validators.required]],
      image: ['']
    })
    this.equipmentService.getAllCategories().subscribe(data => (
      this.categoryList = data
    ));
  }

  onSubmit() {
    console.log(this.formCreateEquipment.value);
    if (this.formCreateEquipment.valid) {
      console.log("asaadadada")
      this.equipmentService.createEquipment(this.formCreateEquipment.value).subscribe(() => {
        this.snackBar.open("Thêm mới thành công tài sản " + this.formCreateEquipment.value.name, "OK", {
          duration: 5000
        })
        this.formCreateEquipment.reset();
      })
    }
  }

}
