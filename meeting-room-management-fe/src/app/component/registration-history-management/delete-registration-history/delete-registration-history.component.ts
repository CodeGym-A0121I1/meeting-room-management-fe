import {Component, Inject, OnInit} from '@angular/core';
import {RegistrationHistoryService} from "../../../service/registration-history.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {RegistrationHistory} from "../../../model/RegistrationHistory";
import {CancelSignroomComponent} from "../cancel-signroom/cancel-signroom.component";
import {PopUpComponent} from "../pop-up/pop-up.component";

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

  openDialogDelete(registrationHistoryCancel :RegistrationHistory){
    this.service.getById(registrationHistoryCancel.id).subscribe(data =>{
      const dialogRef = this.dialog.open(PopUpComponent,{
        width:'500px',
        height:'215px',
        data:data
      });
      dialogRef.afterClosed().subscribe(()=>{
        this.ngOnInit();
      })
    })
  }
  }

