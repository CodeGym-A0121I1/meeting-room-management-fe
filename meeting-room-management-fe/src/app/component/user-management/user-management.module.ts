import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserManagementRoutingModule} from '../../routing/user-management-routing.module';
import {ListUserComponent} from './list-user/list-user.component';
import {ChangePasswordUserComponent} from './change-password-user/change-password-user.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {UpdateUserComponent} from './update-user/update-user.component';


@NgModule({
  declarations: [
    ListUserComponent,
    ChangePasswordUserComponent,
    CreateUserComponent,
    UpdateUserComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule
  ],exports:[
    CreateUserComponent,
    ListUserComponent,
    UpdateUserComponent,
    ChangePasswordUserComponent
  ]
})
export class UserManagementModule { }
