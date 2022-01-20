import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FeedbackService} from "../../../service/feedback.service";
import {Feedback} from "../../../models/Feedback";
import {MatDialog} from "@angular/material/dialog";
import {ResponseFeedbackComponent} from "../response-feedback/response-feedback.component";

@Component({
  selector: 'app-list-feedback',
  templateUrl: './list-feedback.component.html',
  styleUrls: ['./list-feedback.component.css']
})
export class ListFeedbackComponent implements OnInit {

  feedbackList: Feedback[] = [];

  constructor(private feedbackService: FeedbackService,
              private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.feedbackService.getAll().subscribe(
      (data) => {
        this.feedbackList = data
      }
    )
  }

  replyFeedback(feedback: Feedback) {
    const matDialog = this.matDialog.open(ResponseFeedbackComponent, {
      width: '800px',
      data: feedback,
    });
    matDialog.afterClosed().subscribe(() => {
      this.ngOnInit();
    })
  }
}
