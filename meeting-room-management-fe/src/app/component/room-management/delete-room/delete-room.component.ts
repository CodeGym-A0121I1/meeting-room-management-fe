import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RoomService} from "../../../service/room.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Room} from "../../../model/room/Room";

@Component({
  selector: 'app-delete-room',
  templateUrl: './delete-room.component.html',
  styleUrls: ['./delete-room.component.css']
})
export class DeleteRoomComponent implements OnInit {


  constructor(
    private dialogRef:MatDialogRef<DeleteRoomComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private roomService:RoomService,
    private snackBar:MatSnackBar
  ) { }
  room!: Room;
  ngOnInit(): void {
    this.room = this.data;
  }
  deleteConfirm(){
      this.roomService.deleteRoomById(this.room.id).subscribe(() => {
        this.dialogRef.close();
        this.snackBar.open("Xoá phòng thành công !!! ", "OK", {
          duration: 4000
        })
      },() => {
        this.dialogRef.close();
        this.snackBar.open("Xoá thất bại ! Phòng đang có người đặt","OK",{
          duration:4000,
          panelClass: ['warning']
        })
      });
  }
}
