import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RoomService} from "../../../service/room.service";

@Component({
  selector: 'app-detail-room',
  templateUrl: './detail-room.component.html',
  styleUrls: ['./detail-room.component.css']
})
export class DetailRoomComponent implements OnInit {

  constructor(private roomServie:RoomService
    ,private activatedRoute:ActivatedRoute) { }
  room:any;
  errors: string ='';
  ngOnInit(): void {
    this.roomServie.getRoomById(this.activatedRoute.snapshot.params['id']).subscribe(data=>{
        console.log(data);
        this.room=data;
      },error =>  this.errors="Không tìm thấy"
    )
  }

}
