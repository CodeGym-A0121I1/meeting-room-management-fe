import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateRoomComponent} from "../component/room-management/create-room/create-room.component";
import {SelectEquipmentComponent} from "../component/room-management/select-equipment/select-equipment.component";

const routes: Routes = [
  {
    path: "room/add",
    component: CreateRoomComponent,
  },
  {
    path: "room/add/equipments",
    component: SelectEquipmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomManagementRoutingModule { }
