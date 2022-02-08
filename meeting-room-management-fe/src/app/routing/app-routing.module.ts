import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "../component/login/login/login.component";
import {ForbiddenComponent} from "../component/forbidden/forbidden.component";
import {PageNotFoundComponent} from "../component/pagenotfound/page-not-found.component";
import {AuthGuard} from "../guards/auth.guard";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "access-denied", component: ForbiddenComponent},
  {path: "**", component: PageNotFoundComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
