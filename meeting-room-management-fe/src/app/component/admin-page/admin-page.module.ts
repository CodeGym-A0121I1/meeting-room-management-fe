import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    HomeAdminComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class AdminPageModule { }
