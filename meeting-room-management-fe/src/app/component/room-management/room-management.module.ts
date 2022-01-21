import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RoomManagementRoutingModule} from '../../routing/room-management-routing.module';
import {ListRoomComponent} from './list-room/list-room.component';
import {UpdateRoomComponent} from './update-room/update-room.component';
import {DetailRoomComponent} from './detail-room/detail-room.component';
import {CreateRoomComponent} from './create-room/create-room.component';
import {DeleteRoomComponent} from './delete-room/delete-room.component';
import {NgxPaginationModule} from "ngx-pagination";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListRoomComponent,
    UpdateRoomComponent,
    DetailRoomComponent,
    CreateRoomComponent,
    DeleteRoomComponent
  ],
    imports: [
        CommonModule,
        RoomManagementRoutingModule,
        NgxPaginationModule,
        MatDialogModule,
        ReactiveFormsModule
    ],exports:[CreateRoomComponent,
  DeleteRoomComponent,
    DetailRoomComponent,
    ListRoomComponent,
    UpdateRoomComponent
  ]
})
export class RoomManagementModule { }
