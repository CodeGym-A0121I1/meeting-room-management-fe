import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateRoomComponent} from "../component/room-management/create-room/create-room.component";
import {DetailRoomComponent} from "../component/room-management/detail-room/detail-room.component";
import {ListRoomComponent} from "../component/room-management/list-room/list-room.component";

const routes: Routes = [
  {
    path: "room/add",
    component: CreateRoomComponent,
  },
  {path: 'detail/:id',component:DetailRoomComponent },
  {path: 'room/list',component:ListRoomComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomManagementRoutingModule { }
