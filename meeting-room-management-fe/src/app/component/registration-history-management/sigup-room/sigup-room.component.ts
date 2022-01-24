import {Component, OnInit} from '@angular/core';
import {RegistrationHistory} from "../../../model/RegistrationHistory";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RegistrationHistoryService} from "../../../service/registration-history.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Room} from "../../../model/Room";
import {User} from "../../../model/User";

@Component({
  selector: 'app-sigup-room',
  templateUrl: './sigup-room.component.html',
  styleUrls: ['./sigup-room.component.css']
})
export class SigupRoomComponent implements OnInit {

  history: RegistrationHistory[] | any;
  rooms: Room[] | undefined;
  p: any;

  constructor(private historyService: RegistrationHistoryService,
              private activatedRoute: ActivatedRoute,
              private matDialog: MatDialog,
              private snackbar: MatSnackBar,
              private router: Router) {
  }

  historyForm = new FormGroup(
    {
      id: new FormControl('', Validators.required),
      dateStart: new FormControl('', Validators.required),
      dateEnd: new FormControl('', Validators.required),
      timeStart: new FormControl('', Validators.required),
      timeEnd: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      isCancel: new FormControl('', Validators.required),
      room: new FormControl('', Validators.required),
      user: new FormControl('', Validators.required),
    }
  )
  ngOnInit(): void {
    this.historyService.getAllRoom().subscribe(
      (data) => this.rooms = data
    );
  }

  onSubmit() {
    if (this.historyForm.valid) {
      this.historyService.SignupHistory(this.historyForm.value).subscribe();
      // @ts-ignore
      this.snackbar('Đăng ký phòng thành công' + this.historyForm.value.id, 'OK');
      // this.router.navigateByUrl('/list')

    }
  }

}
