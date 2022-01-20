import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FeedbackManagementRoutingModule} from '../../routing/feedback-management-routing.module';
import {ListFeedbackComponent} from './list-feedback/list-feedback.component';
import {CreateFeedbackComponent} from './create-feedback/create-feedback.component';
import {ResponseFeedbackComponent} from './response-feedback/response-feedback.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
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
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class FeedbackManagementModule { }
