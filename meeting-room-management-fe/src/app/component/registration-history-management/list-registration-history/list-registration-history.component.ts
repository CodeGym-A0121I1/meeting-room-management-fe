import {Component, OnInit} from '@angular/core';
import {RegistrationHistoryService} from "../../../service/registration-history.service";
import {Status} from "../../../model/status";

@Component({
  selector: 'app-list-registration-history',
  templateUrl: './list-registration-history.component.html',
  styleUrls: ['./list-registration-history.component.css']
})


export class ListRegistrationHistoryComponent implements OnInit {

  today: string ='';
  registrationHistoryList!: any[];
  p: any;
  listRoomType!: any[];
  status!: Status;
  list!: any[];
  num!: string[];
  public mySentences: Array<any> = [
    {id: 'USING', text: 'Đang sử dụng'},
    {id: 'FIXING', text: 'Đang sửa '},
    {id: 'AVAILABLE', text: ' Khả dụng'},
  ];
  statusArr: string[][] = [['FIXING', 'Đang sửa'], ['USING', 'Đang sử dụng'], ['AVAILABLE', 'Khả dụng']];

  // keys = Object.values(Status);


  public myArray = Object.values(status).map(item => String(item));


  constructor(private service: RegistrationHistoryService) {

  }


  ngOnInit(): void {
    // console.log(Object.keys(Status));

    this.num = Object.keys(Status);
    console.log(this.myArray);
    this.service.getListIsCancel().subscribe((data: any) => {
        this.registrationHistoryList = data;
      }
    )
    console.log(this.listRoomType);
    this.service.getAllRoomType().subscribe((data: any) => {
        this.listRoomType = data;

      }
    )
  }

  search(roomName: string, dateStart: string, dateEnd: string, status: string, roomType: string) {
    this.service.getListSearch(roomName, dateStart, dateEnd, status, roomType).subscribe((data: any) => {
      this.registrationHistoryList = data;
      console.log(data);
    });
  }

  convertStatus(status: string){
    let statusVn : string = '';
    for (const s of this.mySentences) {
      if (s.id == status){
        statusVn = s.text;
        console.log(statusVn);
      }

    }
    return statusVn;
  }
}


