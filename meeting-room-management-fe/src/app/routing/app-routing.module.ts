import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../component/login/login/login.component";
import {HomeUserComponent} from "../component/user-page/home-user/home-user.component";
import {HomeAdminComponent} from "../component/admin-page/home-admin/home-admin.component";
import {ChangePasswordUserComponent} from "../component/user-management/change-password-user/change-password-user.component";
import {ListRoomComponent} from "../component/room-management/list-room/list-room.component";
import {AdminGuard} from "../service/admin.guard";
import {UserGuard} from "../service/user.guard";
import {ListEquipmentComponent} from "../component/equipment-management/list-equipment/list-equipment.component";

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"user",component:HomeUserComponent, canActivate: [UserGuard],children:[
      {path:"changepass",component:ChangePasswordUserComponent},
      {path:"listroom",component:ListRoomComponent}
    ]},
  {path:"admin",component:HomeAdminComponent, canActivate: [AdminGuard],children:[
      {path:"equipment",component: ListEquipmentComponent}

    ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
