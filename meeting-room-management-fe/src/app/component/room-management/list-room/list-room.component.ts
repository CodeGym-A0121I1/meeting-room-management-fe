import {Component, OnInit} from '@angular/core';
import {RoomService} from "../../../service/room.service";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DeleteRoomComponent} from "../delete-room/delete-room.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Floor} from "../../../model/room/Floor";
import {RoomType} from "../../../model/room/RoomType";
import {Room} from "../../../model/room/Room";
import {Area} from "../../../model/room/Area";

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.css']
})
export class ListRoomComponent implements OnInit {

  roomList!: any[];
  p: any;
  floorList:Array<Floor> = [];
  roomTypeList: Array<RoomType> = [];
  areaList:Array<Area> = [];
  formSearchRoom!:FormGroup;
  constructor(private roomService:RoomService,
              private activatedRoute:ActivatedRoute,
              private matDialog:MatDialog,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.roomService.getAllRoom().subscribe(data =>
      this.roomList = data
    );
    this.roomService.getAllFloors().subscribe(
      data => this.floorList = data
    );
    this.roomService.getAllRoomTypes().subscribe(
      data => this.roomTypeList = data
    );
    this.roomService.getAllAreas().subscribe(
      data => this.areaList = data
    )
  }
  createForm():void {
    this.formSearchRoom = this.formBuilder.group({
      name: ['', [Validators.required]],
      status: [''],
      capacity: ['', [Validators.pattern("\\d+"), Validators.required]],
      area: [this.areaList[0], [Validators.required]],
      floor: [this.floorList[0], [Validators.required]],
      roomType: [this.roomTypeList[0], [Validators.required]]
    })
  }
  openDialogDelete(room:Room){
    this.roomService.getById(room.id).subscribe(data => {
      const dialogRef = this.matDialog.open(DeleteRoomComponent, {
        width: '500px',
        height: '215px',
        data: data
      });
      dialogRef.afterClosed().subscribe(() => {
        this.ngOnInit();
      })
    })
  }
}
