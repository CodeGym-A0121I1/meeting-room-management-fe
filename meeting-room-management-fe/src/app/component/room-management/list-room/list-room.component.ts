import {Component, OnInit} from '@angular/core';
import {RoomService} from "../../../service/room.service";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DeleteRoomComponent} from "../delete-room/delete-room.component";
import {Room} from "../../../models/Room";
import {Floor} from "../../../models/Floor";
import {RoomType} from "../../../models/RoomType";
import {Area} from "../../../models/Area";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

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
  constructor(private roomService:RoomService,
              private activatedRoute:ActivatedRoute,
              private matDialog:MatDialog,
              private formBuilder: FormBuilder,
              private  snackBar:MatSnackBar) { }

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
    );
  }
  openDialogDelete(room:Room){
    this.roomService.getRoomById(room.id).subscribe(data =>{
      const dialogRef = this.matDialog.open(DeleteRoomComponent,{
        width:'500px',
        height:'215px',
        data:data});
      dialogRef.afterClosed().subscribe(()=>{
        this.ngOnInit();
      })
    })
  }

  search(roomName:any,floor:any,area:any,roomType:any,capacity:any,status:any) {
      this.roomService.searchRoom(roomName,floor,area,roomType,capacity,status).subscribe((data:any)=>{
        this.roomList = data;
        this.p= 1;
        console.log(this.roomList)
      },()=>{
        this.snackBar.open("Không tìm thấy phòng như yêu cầu","OK",{
          duration:4000
        });
        this.ngOnInit();
      })
  }
}
