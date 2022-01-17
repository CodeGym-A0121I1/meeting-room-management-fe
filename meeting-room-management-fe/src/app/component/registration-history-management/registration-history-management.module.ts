import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {RegistrationHistoryManagementRoutingModule} from '../../routing/registration-history-management-routing.module';
import {StatisticRoomFormComponent} from './statistic-room-form/statistic-room-form.component';
import {StatisticsTimeFormComponent} from './statistics-time-form/statistics-time-form.component';
import {StatisticsRoomTableComponent} from './statistics-room-table/statistics-room-table.component';
import {StatisticsTimeTableComponent} from './statistics-time-table/statistics-time-table.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {ListRegistrationHistoryComponent} from './list-registration-history/list-registration-history.component';
import {DeleteRegistrationHistoryComponent} from './delete-registration-history/delete-registration-history.component';
import {SigupRoomComponent} from './sigup-room/sigup-room.component';
import {CancelSignroomComponent} from './cancel-signroom/cancel-signroom.component';
import {StatisticsOfTimesComponent} from './statistics-of-times/statistics-of-times.component';
import {SearchRoomComponent} from './search-room/search-room.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DetailRoomComponent} from './detail-room/detail-room.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
    declarations: [
        StatisticRoomFormComponent,
        StatisticsTimeFormComponent,
        StatisticsRoomTableComponent,
        StatisticsTimeTableComponent,
        StatisticsComponent,
        ListRegistrationHistoryComponent,
        DeleteRegistrationHistoryComponent,
        SigupRoomComponent,
        CancelSignroomComponent,
        StatisticsOfTimesComponent,
        SearchRoomComponent,
        DetailRoomComponent
    ],
    imports: [
        CommonModule,
        RegistrationHistoryManagementRoutingModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
        FormsModule,
        MatSnackBarModule,
    ], exports: [StatisticRoomFormComponent,
        StatisticsTimeFormComponent,
        StatisticsRoomTableComponent,
        StatisticsTimeTableComponent,
        StatisticsComponent,
        ListRegistrationHistoryComponent,
        DeleteRegistrationHistoryComponent,
        SigupRoomComponent,
        CancelSignroomComponent,
        StatisticsOfTimesComponent
    ]
})
export class RegistrationHistoryManagementModule {
}
