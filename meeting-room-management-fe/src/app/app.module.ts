import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './routing/app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatInputModule} from "@angular/material/input";
import {NgxPaginationModule} from "ngx-pagination";
import {RouterModule, Routes} from "@angular/router";
import {RoomManagementModule} from "./component/room-management/room-management.module";
import {RegistrationHistoryManagementModule} from "./component/registration-history-management/registration-history-management.module";
import {SigupRoomComponent} from "./component/registration-history-management/sigup-room/sigup-room.component";
import {SearchRoomComponent} from "./component/registration-history-management/search-room/search-room.component";

const routes: Routes = [
  {path: 'signuproom', component: SigupRoomComponent},
  {path: 'searchrooom', component: SearchRoomComponent},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule,
    // MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSnackBarModule,
    NgxPaginationModule,
    RoomManagementModule,
    RouterModule.forChild(routes),
    RegistrationHistoryManagementModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {
}
