import {Component, Inject, OnInit} from '@angular/core';
import {RegistrationHistory} from "../../../model/RegistrationHistory";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
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

    event: string | undefined;
    // history: RegistrationHistory | any;
    history: RegistrationHistory | any;
    p: any;
    soa: string | undefined;

    constructor(@Inject(MAT_DIALOG_DATA) public formHistory: FormGroup,
                private matdialog: MatDialogRef<SigupRoomComponent>,
                private historyService: RegistrationHistoryService,
                private activatedRoute: ActivatedRoute,
                private matDialog: MatDialog,
                private snackbar: MatSnackBar,
                private router: Router) {
    }


    ngOnInit(): void {
        this.history = this.formHistory.value;
    }

    Cancel() {
        this.matdialog.close();
    }

    soA(eventss: Event) {
        // @ts-ignore
        this.soa = eventss.target.value;
        // @ts-ignore
        // this.history.get('description') = this.soa;

    }

    xacdinh() {
        console.log("history");
        console.log(this.history)
        this.historyService.SignupHistory(this.history).subscribe();
        this.snackbar.open("Đăng ký phòng thành công", "Đóng", {
            duration: 3000,
            panelClass: ['mat-toolbar', 'mat-primary']
        })
        this.matdialog.close();
    }
}
