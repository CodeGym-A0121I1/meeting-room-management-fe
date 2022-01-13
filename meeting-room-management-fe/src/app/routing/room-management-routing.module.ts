import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateRoomComponent} from "../component/room-management/create-room/create-room.component";
import {UpdateRoomComponent} from "../component/room-management/update-room/update-room.component";

const routes: Routes = [
  {
    path: "room/add",
    component: CreateRoomComponent,
  },
  {
    path: "room/update/:id", component: UpdateRoomComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomManagementRoutingModule { }
