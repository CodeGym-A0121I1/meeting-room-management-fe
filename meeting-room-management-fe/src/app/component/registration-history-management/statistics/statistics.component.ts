import {Component, OnInit} from '@angular/core';
import {RegistrationHistoryService} from "../../../service/registration-history.service";
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

function checkMonthYear(c: AbstractControl) {
  const value = c.value;
  if (value.month != '' && value.year == '')
    return {yearRequired: true}
  return null;
}

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
  registrationList: any;
  performance: number = 0;
  total: number = 0;
  // @ts-ignore
  p: string | number;

  constructor(private registrationHistoryService: RegistrationHistoryService, private fb: FormBuilder) {
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

  searchForm = this.fb.group({
    roomType: ["", []],
    roomName: ["", []],
    timeGroup: this.fb.group({
        month: ["", []],
        year: ["", []]
      }, {validator: checkMonthYear}
    )
  });

  searchByRoom(roomType: string, roomName: string, month: string, year: string) {
    this.registrationHistoryService.getStatisticByRoom(roomType, roomName, month, year).subscribe(data => {
      this.registrationList = data;
      this.p = 1;
    });
    this.registrationHistoryService.getStatisticPerformance(roomType, roomName, month, year).subscribe(data => this.performance = data);
    this.registrationHistoryService.getStatisticTotalUser(roomType, roomName, month, year).subscribe(data => this.total = data);
  }

}
