import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeedbackManagementModule} from "../component/feedback-management/feedback-management.module";

const routes: Routes = [
  {path: "feedback", component: FeedbackManagementModule, children:[]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
