import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SigupRoomComponent} from "../component/registration-history-management/sigup-room/sigup-room.component";
import {SearchRoomComponent} from "../component/registration-history-management/search-room/search-room.component";

const routes: Routes = [
    {path: 'signuproom', component: SigupRoomComponent},
    {path: 'searchrooom', component: SearchRoomComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegistrationHistoryManagementRoutingModule {
}
