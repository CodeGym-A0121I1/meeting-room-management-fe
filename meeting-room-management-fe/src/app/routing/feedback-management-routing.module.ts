import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateFeedbackComponent} from "../component/feedback-management/create-feedback/create-feedback.component";

const routes: Routes = [
  {path: "feedback", children: [
      {path: "create", component: CreateFeedbackComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackManagementRoutingModule { }
