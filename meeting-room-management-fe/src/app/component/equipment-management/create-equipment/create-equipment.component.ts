import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from '@angular/material/dialog';
import {EquipmentService} from "../../../service/equipment.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs/operators";
import {Category} from "../../../model/equipment/Category";

@Component({
  selector: 'app-create-equipment',
  templateUrl: './create-equipment.component.html',
  styleUrls: ['./create-equipment.component.css']
})
export class CreateEquipmentComponent implements OnInit {

  // @ts-ignore
  formCreateEquipment: FormGroup;
  image:string |any;
  selectedFile: File | any;

  constructor(
    private equipmentService: EquipmentService,
    private formBuilder: FormBuilder,
    private matDialog: MatDialog,
    private router: Router,
    private snackBar: MatSnackBar,
    private angularFireStorage: AngularFireStorage,
  ) { }

  categoryList: Array<Category> = [];

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
    this.formCreateEquipment.value.image = this.image
    if (this.formCreateEquipment.valid) {
      this.equipmentService.createEquipment(this.formCreateEquipment.value).subscribe(() => {
        this.snackBar.open("Thêm mới thành công tài sản " + this.formCreateEquipment.value.name, "OK", {
          duration: 5000
        })
        this.formCreateEquipment.reset();
      })
    }
  }

  selectFile(event: any) {
    const path = new Date().toString();
    this.selectedFile=event.target.files[0]
    console.log(this.selectedFile)
    this.angularFireStorage.upload(path,this.selectedFile)
      .snapshotChanges().pipe(
      finalize(() => {
        this.angularFireStorage.ref(path).getDownloadURL().subscribe(
          (data)=>{
            this.image=data;
          }
        )
      })

    ).subscribe();
  }

}
