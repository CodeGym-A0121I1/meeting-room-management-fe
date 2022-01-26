import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegistrationHistoryManagementRoutingModule} from '../../routing/registration-history-management-routing.module';
import {StatisticsComponent} from './statistics/statistics.component';
import {ListRegistrationHistoryComponent} from './list-registration-history/list-registration-history.component';
import {DeleteRegistrationHistoryComponent} from './delete-registration-history/delete-registration-history.component';
import {SignupRoomComponent} from './sigup-room/signup-room.component';
import {CancelSignroomComponent} from './cancel-signroom/cancel-signroom.component';
import {SearchRoomComponent} from './search-room/search-room.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DetailRoomComponent} from './detail-room/detail-room.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {NgxPaginationModule} from "ngx-pagination";
import {PopUpComponent} from "./pop-up/pop-up.component";

@NgModule({
    declarations: [
      StatisticsComponent,
      ListRegistrationHistoryComponent,
      DeleteRegistrationHistoryComponent,
      SignupRoomComponent,
      CancelSignroomComponent,
      SearchRoomComponent,
      DetailRoomComponent,
      PopUpComponent
    ],
  imports: [
    CommonModule,
    RegistrationHistoryManagementRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule,
    NgxPaginationModule,
  ], exports: [
    StatisticsComponent,
    ListRegistrationHistoryComponent,
    DeleteRegistrationHistoryComponent,
    SignupRoomComponent,
    CancelSignroomComponent,
    PopUpComponent
  ]
})
export class RegistrationHistoryManagementModule {
}
