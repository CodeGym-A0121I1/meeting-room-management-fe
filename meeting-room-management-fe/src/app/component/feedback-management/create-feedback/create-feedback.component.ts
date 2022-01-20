import {Component, OnInit} from '@angular/core';
import {RoomDTO} from "../../../models/dto/RoomDTO";
import {FeedbackService} from "../../../service/feedback.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Feedback} from "../../../models/Feedback";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-feedback',
  templateUrl: './create-feedback.component.html',
  styleUrls: ['./create-feedback.component.css']
})
export class CreateFeedbackComponent implements OnInit {

  roomDtoList: RoomDTO[] = [];
  feedback: Feedback | any;
  checkOnSubmit: boolean = true;

  constructor(private feedbackService: FeedbackService,
              private matSnackBar: MatSnackBar) {
  }

  formFeedback = new FormGroup({
    noteRequest: new FormControl("", Validators.required),
    user: new FormGroup({
      id: new FormControl()
    }),
    room: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
    this.feedbackService.getAllRoomDTO().subscribe(
      (data: any) => {
        this.roomDtoList = data;
      }
    )
  }

  onSubmit() {
    if (this.formFeedback.valid) {
      this.checkOnSubmit = false;
      this.formFeedback.value.user.id = 'U-0001';
      this.feedback = this.formFeedback.value;
      this.matSnackBar.open("Đang gửi phản hồi đến quản trị viên ...")
      this.feedbackService.create(this.feedback).subscribe(
        (data) => {
          if (data) {
            this.matSnackBar.open("Đã gửi phản hồi qua email thành công", "Đóng", {
              duration: 3000,
              panelClass: ['mat-toolbar', 'mat-primary']
            })
          } else {
            this.matSnackBar.open("Phản hồi đã được gửi", "Đóng", {
              duration: 3000,
              panelClass: ['mat-toolbar', 'mat-primary']
            })
          }
          this.checkOnSubmit = true;
        },
        (error) => {
          this.matSnackBar.open("Phản hồi không thành công !", "Đóng", {
            panelClass: ['mat-toolbar', 'mat-warn'],
            duration: 3000
          })
        }
      )
    }
  }

}

