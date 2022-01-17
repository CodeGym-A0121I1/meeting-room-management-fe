import {Component, OnInit} from '@angular/core';
import {RegistrationHistoryService} from "../../../service/registration-history.service";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  monthList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  yearList: number[] = [2018, 2019, 2020, 2021, 2022];
  roomTypeList: any;
  roomList: any;
  typeStatistic: string = "";
  registrationList: any;
  performance: number = 0;
  total: number = 0;
  // @ts-ignore
  p: string | number;

  constructor(
    private registrationHistoryService: RegistrationHistoryService
  ) {
  }

  ngOnInit(): void {
    this.registrationHistoryService.getAll().subscribe(data => {
      this.registrationList = data;
    });
    this.registrationHistoryService.getAllRoomType().subscribe(data => {
      this.roomTypeList = data;
    });
    this.registrationHistoryService.getAllRoom().subscribe(data => {
      this.roomList = data;
    });
  }

  searchByRoom(roomType: string, roomName: string, month: string, year: string) {
    this.registrationHistoryService.getStatisticByRoom(roomType, roomName, month, year).subscribe(data => {
      this.registrationList = data;
      this.p = 1;
    })
    if (roomName != "") {
      if (month == "" && year == ""){
        this.typeStatistic = "byName"
      }
      this.typeStatistic = "byRoom";
      this.registrationHistoryService.getStatisticPerformance(roomType, roomName, month, year).subscribe(data => this.performance = data);
      this.registrationHistoryService.getStatisticTotalUser(roomType, roomName, month, year).subscribe(data => this.total = data);
    }
  }

}
