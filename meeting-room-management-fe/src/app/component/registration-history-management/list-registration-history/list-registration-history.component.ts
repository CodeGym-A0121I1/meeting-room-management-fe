import {Component, OnInit} from '@angular/core';
import {RegistrationHistoryService} from "../../../service/registration-history.service";

@Component({
  selector: 'app-list-registration-history',
  templateUrl: './list-registration-history.component.html',
  styleUrls: ['./list-registration-history.component.css']
})
export class ListRegistrationHistoryComponent implements OnInit {

  registrationHistoryList1: any;
  p: number | string;
  listRoomType!: any[];

  constructor(private service: RegistrationHistoryService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data: any) => {
        this.registrationHistoryList1 = data;
      }
    )

    this.service.getAllRoomType().subscribe((data: any) => {
        this.listRoomType = data;
      }
    )
  }
  }


