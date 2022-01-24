import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "../component/login/login/login.component";
import {ForbiddenComponent} from "../component/forbidden/forbidden.component";
import {HomeComponent} from "../component/home/home.component";
import {PageNotFoundComponent} from "../component/pagenotfound/page-not-found.component";
import {AuthGuard} from "../guards/auth.guard";

const routes: Routes = [
  {path: "", component: HomeComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: "header", component: HomeComponent},
  {path: "access-denied", component: ForbiddenComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
