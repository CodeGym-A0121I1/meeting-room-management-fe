import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "../component/login/login/login.component";
import {ForbiddenComponent} from "../component/forbidden/forbidden.component";
import {HeaderComponent} from "../component/header/header.component";
import {UpdateRoomComponent} from "../component/room-management/update-room/update-room.component";
import {PageNotFoundComponent} from "../component/pagenotfound/page-not-found.component";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "header", component: HeaderComponent},
  {path: "access-denied", component: ForbiddenComponent},
  {path: 'room/update/:id', component: UpdateRoomComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
