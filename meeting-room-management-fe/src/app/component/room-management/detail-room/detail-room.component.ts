import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RoomService} from "../../../service/room.service";

@Component({
  selector: 'app-detail-room',
  templateUrl: './detail-room.component.html',
  styleUrls: ['./detail-room.component.css']
})
export class DetailRoomComponent implements OnInit {

  constructor(private roomServie: RoomService
    , private activatedRoute: ActivatedRoute) {
  }

  room: any;
  errors: string = '';
  countRoom!: any;

  ngOnInit(): void {
    this.roomServie.getRoomById(this.activatedRoute.snapshot.params['id']).subscribe(data => {
        data.status = this.converStatus(data.status)
        // data.equipmentList=this.covertArrayEquipmentToString(data.equipmentList)
        this.room = data;
        this.roomServie.getCountStaticByRoom(this.room.id).subscribe(data => {
          this.countRoom = data;
          console.log(this.countRoom)
        })


      }, error => this.errors = error
    )
  }

  converStatus(status: string): string {
    console.log(status)
    if (status == "USING") {
      status = 'Đang sử dụng'
    }
    if (status == "FIXING") {
      status = 'Đang sửa'
    }
    if (status == "AVAIABLE") {
      status = 'Khả Dụng';
    }
    return status
  }

}
