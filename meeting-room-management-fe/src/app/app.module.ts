import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './routing/app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatInputModule} from "@angular/material/input";
import {NgxPaginationModule} from "ngx-pagination";
import {RouterModule} from "@angular/router";
import {RoomManagementModule} from "./component/room-management/room-management.module";

import {
  RegistrationHistoryManagementModule
} from "./component/registration-history-management/registration-history-management.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDialogModule,
    // MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSnackBarModule,
    NgxPaginationModule,
    RoomManagementModule,
    RegistrationHistoryManagementModule
  ],
  providers: [{ provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] }],
  bootstrap: [AppComponent]
})
export class AppModule { }
