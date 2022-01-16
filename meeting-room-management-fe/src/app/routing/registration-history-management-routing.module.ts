import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigupRoomComponent} from "../component/registration-history-management/sigup-room/sigup-room.component";

const routes: Routes = [
  {path: 'signuproom', component:  SigupRoomComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationHistoryManagementRoutingModule { }
