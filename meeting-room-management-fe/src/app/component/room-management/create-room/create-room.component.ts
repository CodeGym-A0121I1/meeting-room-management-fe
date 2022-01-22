import {Component, ElementRef, OnInit} from '@angular/core';
import {RoomService} from "../../../service/room.service";
import {Area} from "../../../model/room/Area";
import {Floor} from "../../../model/room/Floor";
import {RoomType} from "../../../model/room/RoomType";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Status} from "../../../model/room/Status";
import {MatDialog} from "@angular/material/dialog";
import {SelectEquipmentComponent} from "../select-equipment/select-equipment.component";
import {RoomDTO} from "../../../model/dto/RoomDTO";
import {Equipment} from "../../../model/equipment/Equipment";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {finalize} from "rxjs/operators";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import bsCustomFileInput from 'bs-custom-file-input'
import {DomSanitizer} from "@angular/platform-browser";
import {CategoryDTO} from "../../../model/dto/CategoryDTO";
import {ValidateMessage} from "../../../model/dto/ValidateMessage";
import {EquipmentService} from "../../../service/equipment.service";


@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  formAddRoom: FormGroup;

  constructor(
    private roomService: RoomService,
    private equipmentService: EquipmentService,
    private formBuilder: FormBuilder,
    private matDialog: MatDialog,
    private router: Router,
    private snackBar: MatSnackBar,
    private angularFireStorage: AngularFireStorage,
    private sanitizer: DomSanitizer,
    private elementRef: ElementRef
  ) {
  }

  floorList: Array<Floor> = [];
  roomTypeList: Array<RoomType> = [];
  areaList: Array<Area> = [];
  equipmentList: Array<Equipment> = [];
  categoryWithEquipments: Array<CategoryDTO> = [];
  image: string = "";
  newRoom: RoomDTO = new class implements RoomDTO {
    area: Area;
    capacity: number;
    equipmentList: Array<Equipment>;
    floor: Floor;
    id: string;
    image: string;
    name: string;
    roomType: RoomType;
    status: Status;
  };

  ngOnInit(): void {
    bsCustomFileInput.init()

    this.createForm();

    this.roomService.getAllFloors().subscribe(
      data => {
        this.floorList = data;
      }
    )
    this.roomService.getAllRoomTypes().subscribe(
      data => this.roomTypeList = data
    )
    this.roomService.getAllAreas().subscribe(
      data => this.areaList = data
    )

    // setTimeout(
    //   () => {
    //
    //   }, 0
    // )
  }

  createForm(): void {
    this.formAddRoom = this.formBuilder.group({
      name: ['', [Validators.required]],
      image: [''],
      capacity: ['', [Validators.required, this.checkPositiveNumber]],
      area: [this.areaList[0], [Validators.required]],
      floor: [this.floorList[0], [Validators.required]],
      roomType: [this.roomTypeList[0], [Validators.required]]
    })
  }

  checkPositiveNumber(formControl: AbstractControl) {
    let num = parseInt(formControl.value);
    if (!formControl.value.match("^-?\\d+$")) {
      return {'invalidCapacity': true};
    } else if (num <= 0) {
      return {'negativeCapacity': true};
    } else {
      return null;
    }
  }

  openDialogChooseEquipments(): void {
    this.matDialog.open(SelectEquipmentComponent, {
      width: "1000px",
      data: [this.equipmentList, ''],
      disableClose: true
    }).afterClosed().subscribe(
      data => {
        this.equipmentList = data;
        this.categoryWithEquipments = this.equipmentService.classifyEquipmentByCategory(data);
      }
    );
  }

  createRoom() {
    if (this.formAddRoom.valid) {
      this.convertToDTO();
      this.roomService.addRoom(this.newRoom).subscribe(
        () => {
          console.log(this.newRoom)
          this.snackBar.open("Add Successful")._dismissAfter(3000);
          this.formAddRoom.reset();
          this.equipmentList = [];
          this.image = "";
        },
        error => {
          if (error.status === 400) {
            let errors: Array<ValidateMessage> = []
            for (const key of Object.keys(error.error)) {
              errors.push({
                field: key,
                error: error.error[key]
              })
            }

            for (const validateMessage of errors) {
              this.formAddRoom.get(validateMessage.field)?.setErrors({'serverError': validateMessage.error})
            }
          }
        }
      )
    } else {
      this.formAddRoom.markAllAsTouched();
      const invalidElements = this.elementRef.nativeElement.querySelectorAll('.ng-invalid');
      if (invalidElements.length > 0) {
        invalidElements[1].focus();
      }
    }
  }

  selectFile(event: any) {
    this.roomService.getImageName().subscribe(
      name => {
        let file = event.target.files[0]
        this.angularFireStorage.upload(name, file)
          .snapshotChanges().pipe(
          finalize(() => {
            this.angularFireStorage.ref(name).getDownloadURL().subscribe(
              (data) => {
                this.image = data
              }
            )
          })
        ).subscribe();
      }
    )
  }

  convertToDTO() {
    let newRoom = this.formAddRoom.value;
    this.newRoom.name = newRoom.name.trim();
    this.newRoom.floor = newRoom.floor;
    this.newRoom.image = this.image;
    this.newRoom.capacity = parseInt(newRoom.capacity);
    this.newRoom.area = newRoom.area;
    this.newRoom.roomType = newRoom.roomType;
    this.newRoom.equipmentList = this.equipmentList;
  }

  getClassName(field: string): string {
    let isInvalid: undefined | boolean;
    isInvalid = this.formAddRoom.get(field)?.invalid && this.formAddRoom.get(field)?.dirty
      || (this.formAddRoom.get(field)?.invalid && this.formAddRoom.get(field)?.touched)
      || this.formAddRoom.get(field)?.hasError("serverError");

    return isInvalid ? 'form-control is-invalid' : 'form-control';
  }

  getImage() {
    return this.sanitizer.bypassSecurityTrustUrl(this.formAddRoom.value.image);
  }
}
