import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ListRegistrationHistoryComponent
} from "../component/registration-history-management/list-registration-history/list-registration-history.component";
import {
  DeleteRegistrationHistoryComponent
} from "../component/registration-history-management/delete-registration-history/delete-registration-history.component";

const routes: Routes = [
  {
       path: 'list', component: ListRegistrationHistoryComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationHistoryManagementRoutingModule { }
