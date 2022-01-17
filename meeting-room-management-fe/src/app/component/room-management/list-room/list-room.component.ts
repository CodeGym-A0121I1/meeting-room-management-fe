import {Component, OnInit} from '@angular/core';
import {RoomService} from "../../../service/room.service";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DeleteRoomComponent} from "../delete-room/delete-room.component";
import {Room} from "../../../models/Room";
import {Floor} from "../../../models/Floor";

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.css']
})
export class ListRoomComponent implements OnInit {

  roomList!: any[];
  p: any;
  floorList:Array<Floor> = [];

  constructor(private roomService:RoomService,
              private activatedRoute:ActivatedRoute,
              private matDialog:MatDialog,
              private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.roomService.getAllRoom().subscribe(data =>
      this.roomList = data
    );
    this.roomService.getAllFloors().subscribe(
      data => this.floorList = data
    )
  }
  openDialogDelete(room:Room){
    this.roomService.getRoomById(room.id).subscribe(data =>{
      const dialogRef = this.matDialog.open(DeleteRoomComponent,{
        width:'500px',
        height:'215px',
        data:data
      });
      dialogRef.afterClosed().subscribe(()=>{
        this.ngOnInit();
      })
    })
  }
}
