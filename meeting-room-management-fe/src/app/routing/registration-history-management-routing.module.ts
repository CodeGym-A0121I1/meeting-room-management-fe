import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  DeleteRegistrationHistoryComponent
} from "../component/registration-history-management/delete-registration-history/delete-registration-history.component";

const routes: Routes = [{
  path: 'cancel/:id', component: DeleteRegistrationHistoryComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationHistoryManagementRoutingModule { }
