import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RoomService} from "../../../service/room.service";
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'app-detail-room',
  templateUrl: './detail-room.component.html',
  styleUrls: ['./detail-room.component.css']
})
export class DetailRoomComponent implements OnInit {

  constructor(private roomServie: RoomService
    , private activatedRoute: ActivatedRoute,
              private authService: AuthService) {
  }

  room: any;
  errors: string = '';
  countRoom!: any;

  ngOnInit(): void {
    this.roomServie.getRoomById(this.activatedRoute.snapshot.params['id']).subscribe(data => {
        data.status = this.converStatus(data.status)
        data.equipmentList = this.covertArrayEquipmentToString(data.equipmentList)
        this.room = data;
        this.roomServie.getCountStaticByRoom(this.room.id).subscribe(data => {
          this.countRoom = data;
        })
      }, error => this.errors = error
    )
    this.authService.getUserId()
  }

  converStatus(status: string):string {
    if (status=="USING") {
      status = 'Đang sử dụng'
    }
    if (status == "FIXING") {
      status = 'Đang sửa'
    } if(status=="AVAIABLE") {
      status = 'Khả Dụng';
    }
    return status
  }
  covertArrayEquipmentToString(ArrayEquipment: any){
    let arrayString:string='';
    let arrayString2:string='';
    for (const equipment of ArrayEquipment) {
      arrayString +=equipment.name+' ,';
    }
    arrayString2=arrayString.slice(0,-1)
    return arrayString2;
  }
}
