import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Room} from "../../../model/room/Room";

@Component({
  selector: 'app-detail-room',
  templateUrl: './detail-room.component.html',
  styleUrls: ['./detail-room.component.css']
})
export class DetailRoomComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public room: Room,
              private matdialog: MatDialogRef<DetailRoomComponent>) {
  }

  ngOnInit(): void {
  }

    Huy() {
        this.matdialog.close();
    }


}
