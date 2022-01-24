import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateRoomComponent} from "../component/room-management/create-room/create-room.component";
import {UpdateRoomComponent} from "../component/room-management/update-room/update-room.component";
import {AdminGuard} from "../guards/admin.guard";
import {ListRoomComponent} from "../component/room-management/list-room/list-room.component";

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
      },
      {
        path: "",
        component: ListRoomComponent
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
