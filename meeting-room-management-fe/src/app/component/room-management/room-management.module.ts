import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RoomManagementRoutingModule} from '../../routing/room-management-routing.module';
import {ListRoomComponent} from './list-room/list-room.component';
import {UpdateRoomComponent} from './update-room/update-room.component';
import {DetailRoomComponent} from './detail-room/detail-room.component';
import {CreateRoomComponent} from './create-room/create-room.component';
import {DeleteRoomComponent} from './delete-room/delete-room.component';
// import {AngularFireModule} from "@angular/fire";
import { environment } from './environment/environment';
import {AngularFireModule} from "@angular/fire/compat";
import {ReactiveFormsModule} from "@angular/forms";
// import {environment} from "../../../environments/environment";
// import {AngularFireModule} from '@angular/fire';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SelectEquipmentComponent} from './select-equipment/select-equipment.component';
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    ListRoomComponent,
    UpdateRoomComponent,
    DetailRoomComponent,
    CreateRoomComponent,
    DeleteRoomComponent,
    SelectEquipmentComponent
  ],
  imports: [
    CommonModule,
    RoomManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: [
    CreateRoomComponent,
    DeleteRoomComponent,
    DetailRoomComponent,
    ListRoomComponent,
    UpdateRoomComponent
  ]
})
export class RoomManagementModule { }
