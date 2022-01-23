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
import {RouterModule} from "@angular/router";
import {RoomManagementModule} from "./component/room-management/room-management.module";
import {LoginModule} from "./component/login/login.module";
import {EquipmentManagementModule} from "./component/equipment-management/equipment-management.module";
import {HeaderComponent} from './component/header/header.component';
import {PageNotFoundComponent} from './component/pagenotfound/page-not-found.component';
import {ForbiddenComponent} from './component/forbidden/forbidden.component';

import {FeedbackManagementModule} from "./component/feedback-management/feedback-management.module";

import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {UserManagementModule} from "./component/user-management/user-management.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    ForbiddenComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserModule,
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
    LoginModule,
    EquipmentManagementModule,
    RoomManagementModule,
    FeedbackManagementModule,
    UserManagementModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
