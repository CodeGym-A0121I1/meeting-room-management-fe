import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateRoomComponent} from "../component/room-management/create-room/create-room.component";
import {AdminGuard} from "../guards/admin/admin.guard";

const routes: Routes = [
  {
    path: "room/add",
    component: CreateRoomComponent,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomManagementRoutingModule { }
