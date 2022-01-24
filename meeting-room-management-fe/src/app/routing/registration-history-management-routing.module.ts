import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  ListRegistrationHistoryComponent
} from "../component/registration-history-management/list-registration-history/list-registration-history.component";
import {
  DeleteRegistrationHistoryComponent
} from "../component/registration-history-management/delete-registration-history/delete-registration-history.component";
import {SigupRoomComponent} from "../component/registration-history-management/sigup-room/sigup-room.component";
import {SearchRoomComponent} from "../component/registration-history-management/search-room/search-room.component";
import {StatisticsComponent} from "../component/registration-history-management/statistics/statistics.component";

const routes: Routes = [
  {path: 'signuproom', component: SigupRoomComponent},
  {path: 'searchrooom', component: SearchRoomComponent},
  {path: 'list', component: ListRegistrationHistoryComponent},
  {path: 'statistic', component: StatisticsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationHistoryManagementRoutingModule {
}
