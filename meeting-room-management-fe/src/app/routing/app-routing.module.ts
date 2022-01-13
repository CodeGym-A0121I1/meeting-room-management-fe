import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UpdateRoomComponent} from "../component/room-management/update-room/update-room.component";

const routes: Routes = [   {path: 'room/update/:id',component:UpdateRoomComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
