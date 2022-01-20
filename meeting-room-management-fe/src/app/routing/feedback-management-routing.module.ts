import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListFeedbackComponent} from "../component/feedback-management/list-feedback/list-feedback.component";

const routes: Routes = [
  {path: "feedback", children: [
      {path: "", component: ListFeedbackComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackManagementRoutingModule { }
