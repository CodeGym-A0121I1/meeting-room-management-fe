import {Component, Inject, OnInit} from '@angular/core';
import {RegistrationHistoryService} from "../../../service/registration-history.service";
import {ActivatedRoute} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-delete-registration-history',
  templateUrl: './delete-registration-history.component.html',
  styleUrls: ['./delete-registration-history.component.css']
})
export class DeleteRegistrationHistoryComponent implements OnInit {

  constructor(private service: RegistrationHistoryService,
              private router: ActivatedRoute,
              public dialog: MatDialog,
              private dialogRef: MatDialogRef<DeleteRegistrationHistoryComponent>,
              @Inject(MAT_DIALOG_DATA) data: any) { }

  registrationHistory:any;
  errors: string ='';
  ngOnInit(): void {

      this.service.getById(this.router.snapshot.params['id']).subscribe(data=>{
          console.log(data);
          this.registrationHistory=data;
        },error =>  this.errors="Không tìm thấy"
      )
  }
  // confirmDelete() {
  //   let dialogRef = this.dialog.open('<h3> abc </h3>', {
  //     height: '400px',
  //     width: '600px',
  //   });
  //   this.service.cancel(this.registrationHistory.id).subscribe(() => {
  //     this.dialogRef.close();
  //   })
  // }

}
