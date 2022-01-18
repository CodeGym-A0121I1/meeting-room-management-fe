import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChangePasswordUserComponent} from "../component/user-management/change-password-user/change-password-user.component";

const routes: Routes = [
  {path:"user" , children:[

    ]},
  {path:"changePassword" , children:[
      {path : "",component: ChangePasswordUserComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
