import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "../component/login/login/login.component";
import {ForbiddenComponent} from "../component/forbidden/forbidden.component";
import {PageNotFoundComponent} from "../component/pagenotfound/page-not-found.component";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "access-denied", component: ForbiddenComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
