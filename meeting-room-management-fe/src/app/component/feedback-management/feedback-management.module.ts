import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FeedbackManagementRoutingModule} from '../../routing/feedback-management-routing.module';
import {ListFeedbackComponent} from './list-feedback/list-feedback.component';
import {CreateFeedbackComponent} from './create-feedback/create-feedback.component';
import {ResponseFeedbackComponent} from './response-feedback/response-feedback.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    ListFeedbackComponent,
    CreateFeedbackComponent,
    ResponseFeedbackComponent
  ],
  imports: [
    CommonModule,
    FeedbackManagementRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule
  ]
})
export class FeedbackManagementModule { }
