import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateUserComponent} from "../component/user-management/create-user/create-user.component";
import {UpdateUserComponent} from "../component/user-management/update-user/update-user.component";
import {AdminGuard} from "../guards/admin.guard";
import {ListUserComponent} from "../component/user-management/list-user/list-user.component";
import {ChangePasswordUserComponent} from "../component/user-management/change-password-user/change-password-user.component";

const routes: Routes = [
  {
    path: "user",
    children: [
      {
        path: "",
        component: ListUserComponent
      },
      {path : "change-password",component: ChangePasswordUserComponent},
      {
        path: "add",
        component: CreateUserComponent
      },
      {
        path: "update/:id",
        component: UpdateUserComponent
      }
    ],
    canActivate: [AdminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
