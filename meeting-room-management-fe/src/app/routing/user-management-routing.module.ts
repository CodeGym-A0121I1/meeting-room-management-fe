import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateUserComponent} from "../component/user-management/create-user/create-user.component";
import {UpdateUserComponent} from "../component/user-management/update-user/update-user.component";

const routes: Routes = [
  {
    path: "user/add",
    component: CreateUserComponent
  },
  {
    path: "user/update/:id",
    component: UpdateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
