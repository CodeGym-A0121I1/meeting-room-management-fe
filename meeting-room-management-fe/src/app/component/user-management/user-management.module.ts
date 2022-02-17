import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserManagementRoutingModule} from '../../routing/user-management-routing.module';
import {ListUserComponent} from './list-user/list-user.component';
import {ChangePasswordUserComponent} from './change-password-user/change-password-user.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {UpdateUserComponent} from './update-user/update-user.component';
import {NgxPaginationModule} from "ngx-pagination";
import {ReactiveFormsModule} from "@angular/forms";
import {ConfirmEqualValidatorDirective} from "../../validator/confirm-equal-validator.directive";


@NgModule({
  declarations: [
    ListUserComponent,
    ChangePasswordUserComponent,
    CreateUserComponent,
    UpdateUserComponent,
    ConfirmEqualValidatorDirective
  ],
    imports: [
        CommonModule,
        UserManagementRoutingModule,
        NgxPaginationModule,
        ReactiveFormsModule
    ],exports:[
    CreateUserComponent,
    ListUserComponent,
    UpdateUserComponent,
    ChangePasswordUserComponent
  ]
})
export class UserManagementModule {
}
