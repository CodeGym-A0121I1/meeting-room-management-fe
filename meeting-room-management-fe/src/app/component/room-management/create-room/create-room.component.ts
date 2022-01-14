import {Component, OnInit} from '@angular/core';
import {RoomService} from "../../../service/room.service";
import {Area} from "../../../model/room/Area";
import {Floor} from "../../../model/room/Floor";
import {RoomType} from "../../../model/room/RoomType";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Status} from "../../../model/room/Status";
import {MatDialog} from "@angular/material/dialog";
import {SelectEquipmentComponent} from "../select-equipment/select-equipment.component";
import {RoomDTO} from "../../../model/dto/RoomDTO";
import {Equipment} from "../../../model/equipment/Equipment";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  formAddRoom: FormGroup;

  constructor(
    private roomService: RoomService,
    private formBuilder: FormBuilder,
    private matDialog: MatDialog,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
  }

  floorList: Array<Floor> = [];
  roomTypeList: Array<RoomType> = [];
  areaList: Array<Area> = [];
  equipmentList: Array<Equipment> = [];
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
    this.createForm();

    this.roomService.getAllFloors().subscribe(
      data => this.floorList = data
    )
    this.roomService.getAllRoomTypes().subscribe(
      data => this.roomTypeList = data
    )
    this.roomService.getAllAreas().subscribe(
      data => this.areaList = data
    )

  }

  createForm(): void {
    this.formAddRoom = this.formBuilder.group({
      name: ['', [Validators.required]],
      image: [''],
      capacity: ['', [Validators.pattern("\\d+"), Validators.required]],
      area: [this.areaList[0], [Validators.required]],
      floor: [this.floorList[0], [Validators.required]],
      roomType: [this.roomTypeList[0], [Validators.required]]
    })
  }

  openDialogChooseEquipments(): void {
    this.matDialog.open(SelectEquipmentComponent, {
      width: "1000px",
      data: this.equipmentList
    }).afterClosed().subscribe(
      data => this.equipmentList = data
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
          this.equipmentList = []
        },
        error => {

        }
      )
    }
  }

  convertToDTO() {
    let newRoom = this.formAddRoom.value;
    this.newRoom.name = newRoom.name;
    this.newRoom.floor = newRoom.floor;
    this.newRoom.image = newRoom.image;
    this.newRoom.capacity = parseInt(newRoom.capacity);
    this.newRoom.area = newRoom.area;
    this.newRoom.roomType = newRoom.roomType;
    this.newRoom.equipmentList = this.equipmentList;
  }

  getClassName(field: string): string {
    let isInvalid: undefined | boolean;
    isInvalid = this.formAddRoom.get(field)?.invalid && this.formAddRoom.get(field)?.dirty
      || (this.formAddRoom.get(field)?.invalid && this.formAddRoom.get(field)?.touched);

    return isInvalid ? 'form-control is-invalid' : 'form-control';

  }
}
