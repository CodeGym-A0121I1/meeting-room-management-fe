import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateRoomComponent} from "../component/room-management/create-room/create-room.component";
import {UpdateRoomComponent} from "../component/room-management/update-room/update-room.component";
import {AdminGuard} from "../guards/admin.guard";

const routes: Routes = [
  {
    path: "room", children: [
      {
        path: "add",
        component: CreateRoomComponent,
      },
      {
        path: "update/:id",
        component: UpdateRoomComponent
      }
    ],
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomManagementRoutingModule {
}
