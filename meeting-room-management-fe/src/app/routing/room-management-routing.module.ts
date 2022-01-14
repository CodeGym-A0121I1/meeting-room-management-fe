import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateRoomComponent} from "../component/room-management/create-room/create-room.component";
import {ListRoomComponent} from "../component/room-management/list-room/list-room.component";

const routes: Routes = [
  {
    path: "room/add",
    component: CreateRoomComponent,
  },
  {
    path:'',component:ListRoomComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomManagementRoutingModule { }
