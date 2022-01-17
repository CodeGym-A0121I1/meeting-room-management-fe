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
  countRoom!:any;
  ngOnInit(): void {
    this.roomServie.getRoomById(this.activatedRoute.snapshot.params['id']).subscribe(data=>{
      console.log(data.name);
      this.room=data;
      // this.room.selector
      console.log(this.room.id)
      this.roomServie.getCountStaticByRoom(this.room.id).subscribe(data=>{
        this.countRoom=data;
        console.log(this.countRoom)
      })


      },error =>  this.errors=error
    )
  }

}
