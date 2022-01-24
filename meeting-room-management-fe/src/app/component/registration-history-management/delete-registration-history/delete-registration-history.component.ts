import {Component, OnInit} from '@angular/core';
import {RegistrationHistoryService} from "../../../service/registration-history.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-registration-history',
  templateUrl: './delete-registration-history.component.html',
  styleUrls: ['./delete-registration-history.component.css']
})
export class DeleteRegistrationHistoryComponent implements OnInit {

  constructor() { }

  historyList : any;

  ngOnInit(): void {

  }
  }

