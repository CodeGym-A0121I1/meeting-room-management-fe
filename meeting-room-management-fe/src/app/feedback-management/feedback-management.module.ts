import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackManagementRoutingModule } from './feedback-management-routing.module';
import { ListFeedbackComponent } from './list-feedback/list-feedback.component';
import { CreateFeedbackComponent } from './create-feedback/create-feedback.component';
import { ResponseFeedbackComponent } from './response-feedback/response-feedback.component';


@NgModule({
  declarations: [
    ListFeedbackComponent,
    CreateFeedbackComponent,
    ResponseFeedbackComponent
  ],
  imports: [
    CommonModule,
    FeedbackManagementRoutingModule
  ]
})
export class FeedbackManagementModule { }
