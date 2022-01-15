import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FeedbackService} from "../../../service/feedback.service";
import {IFeedback} from "../../../models/IFeedback";

@Component({
  selector: 'app-list-feedback',
  templateUrl: './list-feedback.component.html',
  styleUrls: ['./list-feedback.component.css']
})
export class ListFeedbackComponent implements OnInit {

  feedbackList: IFeedback[] = [];

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.feedbackService.getAll().subscribe(
      (data) => {this.feedbackList = data}
    )
  }

}
