import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UpdateUserComponent} from "../component/user-management/update-user/update-user.component";

const routes: Routes = [
  {
    path: "user/update",
    component: UpdateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
