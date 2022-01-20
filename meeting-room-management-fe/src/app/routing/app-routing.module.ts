import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "../component/login/login/login.component";
import {ForbiddenComponent} from "../component/forbidden/forbidden.component";
import {HeaderComponent} from "../component/header/header.component";

const routes: Routes = [
  {path: 'feedback', redirectTo: 'feedback', pathMatch: 'full'}
];
const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "header", component: HeaderComponent},
  {path: "access-denied", component: ForbiddenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
