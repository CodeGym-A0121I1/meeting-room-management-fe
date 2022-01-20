import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUserComponent } from './home-user/home-user.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    HomeUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UserPageModule { }
