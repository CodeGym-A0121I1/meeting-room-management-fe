import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListFeedbackComponent} from "../component/feedback-management/list-feedback/list-feedback.component";
import {CreateFeedbackComponent} from "../component/feedback-management/create-feedback/create-feedback.component";
import {UserGuard} from "../guards/user/user.guard";
import {AdminGuard} from "../guards/admin/admin.guard";

const routes: Routes = [
  {
    path: "feedback", children: [
      {path: "", component: ListFeedbackComponent, canActivate: [AdminGuard]},
      {path: "create", component: CreateFeedbackComponent, canActivate: [UserGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackManagementRoutingModule { }
