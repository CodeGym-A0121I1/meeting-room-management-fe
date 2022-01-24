import {Component, Inject, OnInit} from '@angular/core';
import {RegistrationHistory} from "../../../model/registration-history/RegistrationHistory";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RegistrationHistoryService} from "../../../service/registration-history.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-signup-room',
  templateUrl: './signup-room.component.html',
  styleUrls: ['./signup-room.component.css']
})
export class SignupRoomComponent implements OnInit {

  event: string | undefined;
  history: RegistrationHistory | any;
  p: any;
  soa: string | undefined;

  // @ts-ignore
  constructor(@Inject(MAT_DIALOG_DATA) public formHistory: FormGroup,
              private matdialog: MatDialogRef<SignupRoomComponent>,
              private historyService: RegistrationHistoryService,
              private activatedRoute: ActivatedRoute,
              private matDialog: MatDialog,
              private snackbar: MatSnackBar,
              private router: Router) {
    }

    ngOnInit(): void {
        this.formHistory.value.description = this.soa;
        this.history = this.formHistory.value;
    }

    Cancel() {
        this.matdialog.close();
    }

    soA(eventss: Event) {
        // @ts-ignore
        this.soa = eventss.target.value;
    }

    xacdinh() {
        this.formHistory.value.description = this.soa;
        this.history = this.formHistory.value;
        console.log("history");
      console.log(this.history)
      this.historyService.signupHistory(this.history).subscribe();
      this.snackbar.open("Đăng ký phòng thành công", "Đóng", {
        duration: 3000,
        panelClass: ['mat-toolbar', 'mat-toolbar']
      })
        this.matdialog.close();
    }
}
