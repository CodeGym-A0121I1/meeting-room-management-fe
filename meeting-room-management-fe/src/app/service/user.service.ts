import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ChangePasswordUserComponent} from "../component/user-management/change-password-user/change-password-user.component";
import {ChangePasswordRequestDTO} from "../models/dto/ChangePasswordRequestDTO";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_API = "http://localhost:8080/api/users";

  headers = new HttpHeaders({
    'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0cm9uZyIsImV4cCI6MTY0MzAzNDI2NywiaWF0IjoxNjQyOTk4MjY3fQ.dDHH2MhmXqPMcVbwnwZInezajsN9Ye5SgTdcv0xMuFmyeVGCifgxZ0AKWwL2uJjb2tsmvABd_IgF3mMnXfSq0w'
  });


  constructor(private httpClient: HttpClient) {
  }

  changePassword(changePasswordRequestDTO: ChangePasswordRequestDTO): Observable<boolean> {
    return this.httpClient.put<boolean>(this.URL_API + '/account/password', changePasswordRequestDTO, {headers: this.headers});
  }

}

