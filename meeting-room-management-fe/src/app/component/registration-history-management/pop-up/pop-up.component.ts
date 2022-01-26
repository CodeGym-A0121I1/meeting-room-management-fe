import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RegistrationHistoryService} from "../../../service/registration-history.service";
import {Router} from "@angular/router";
import {RegistrationHistory} from "../../../model/registration-history/RegistrationHistory";

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<PopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: RegistrationHistoryService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }
  registrationHistory!: RegistrationHistory;
  errors: string ='';
  ngOnInit(): void {
    this.registrationHistory = this.data;
  }

  deleteConfirm(){
    console.log(this.registrationHistory.id);
    this.service.cancel(this.registrationHistory.id).subscribe(()=>{

      this.dialogRef.close();
      this.snackBar.open("Delete room success !!! ", "OK",{
        duration: 4000
      })
      this.router.navigateByUrl("/list");

    },error => console.log(error))

  }

}
