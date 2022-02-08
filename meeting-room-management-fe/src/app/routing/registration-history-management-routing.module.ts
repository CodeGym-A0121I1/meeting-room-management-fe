import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  ListRegistrationHistoryComponent
} from "../component/registration-history-management/list-registration-history/list-registration-history.component";
import {SearchRoomComponent} from "../component/registration-history-management/search-room/search-room.component";
import {StatisticsComponent} from "../component/registration-history-management/statistics/statistics.component";
import {UserGuard} from "../guards/user.guard";
import {
  DeleteRegistrationHistoryComponent
} from "../component/registration-history-management/delete-registration-history/delete-registration-history.component";


const routes: Routes = [
  {path: 'search-room', component: SearchRoomComponent, canActivate: [UserGuard]},
  {path: 'registration-history', component: ListRegistrationHistoryComponent},
  {path: 'statistic', component: StatisticsComponent},
  {
    path: 'cancel/:id', component: DeleteRegistrationHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationHistoryManagementRoutingModule {
}
