import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegistrationHistoryManagementRoutingModule} from '../../routing/registration-history-management-routing.module';
import {StatisticRoomFormComponent} from './statistic-room-form/statistic-room-form.component';
import {StatisticsTimeFormComponent} from './statistics-time-form/statistics-time-form.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {ListRegistrationHistoryComponent} from './list-registration-history/list-registration-history.component';
import {DeleteRegistrationHistoryComponent} from './delete-registration-history/delete-registration-history.component';
import {SigupRoomComponent} from './sigup-room/sigup-room.component';
import {CancelSignroomComponent} from './cancel-signroom/cancel-signroom.component';
import {SearchRoomComponent} from './search-room/search-room.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DetailRoomComponent} from './detail-room/detail-room.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatDividerModule} from "@angular/material/divider";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    StatisticRoomFormComponent,
    StatisticsTimeFormComponent,
    StatisticsComponent,
    ListRegistrationHistoryComponent,
    DeleteRegistrationHistoryComponent,
    SigupRoomComponent,
    CancelSignroomComponent,
    SearchRoomComponent,
    DetailRoomComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    RegistrationHistoryManagementRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    NgxPaginationModule,
  ], exports: [StatisticRoomFormComponent,
    StatisticsTimeFormComponent,
    StatisticsComponent,
    ListRegistrationHistoryComponent,
    DeleteRegistrationHistoryComponent,
    SigupRoomComponent,
    CancelSignroomComponent,
    StatisticsComponent
  ]
})
export class RegistrationHistoryManagementModule {
}
