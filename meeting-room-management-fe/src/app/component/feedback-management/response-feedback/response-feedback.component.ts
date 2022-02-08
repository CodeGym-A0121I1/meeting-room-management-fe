import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FeedbackService} from "../../../service/feedback.service";
import {Feedback} from "../../../model/feedback/Feedback";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ListFeedbackComponent} from "../list-feedback/list-feedback.component";

@Component({
  selector: 'app-response-feedback',
  templateUrl: './response-feedback.component.html',
  styleUrls: ['./response-feedback.component.css']
})
export class ResponseFeedbackComponent implements OnInit {

  checkOnSubmit = true;

  constructor(@Inject(MAT_DIALOG_DATA) public feedback: Feedback,
              private feedbackService: FeedbackService,
              private matSnackBar: MatSnackBar,
              private matDialogRef: MatDialogRef<ListFeedbackComponent>) { }

  formNoteResponse = new FormGroup({
    noteResponse : new FormControl('',[Validators.required])
  })

  ngOnInit(): void {
  }

  onSubmit() {

    if (this.formNoteResponse.valid) {
      this.checkOnSubmit = false;
      this.matSnackBar.open("Đang gửi phản hồi đến " + this.feedback.user.fullName + " ........");
      this.matDialogRef.close();
      this.feedbackService.update(this.feedback.id, this.formNoteResponse.value.noteResponse).subscribe(
        (data) => {
          if (data) {
            this.matSnackBar.open("Đã gửi phản hồi đến " + this.feedback.user.fullName + " qua email thành công", "Đóng", {
              duration: 3000,
              panelClass: ['mat-toolbar', 'mat-primary']
            })
          } else {
            this.matSnackBar.open("Phản hồi đã được gửi đến " + this.feedback.user.fullName, "Đóng", {
              duration: 3000,
              panelClass: ['mat-toolbar', 'mat-primary']
            })
          }
          this.checkOnSubmit = true;
        },
        (error) => {
          this.matSnackBar.open("Phản hồi đến " + this.feedback.user.fullName + " không thành công !", "Đóng", {
            panelClass: ['mat-toolbar', 'mat-warn'],
            duration: 3000
          })
        }
      )
    }
  }
}
