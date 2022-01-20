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
    'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0aGFuZyIsImV4cCI6MTY0MjcxMjE3NSwiaWF0IjoxNjQyNjc2MTc1fQ.tnF7AdrOtvwFj2tF5iV3ZNXd4YMBOCYbiBWd-4CSB6R62k0tNodSjG39-bGZD1Ly_VJm--2Dz_AnUdZGk9f14Q'
  });


  constructor(private httpClient: HttpClient) {
  }

  changePassword(changePasswordRequestDTO: ChangePasswordRequestDTO): Observable<any> {
    console.log(changePasswordRequestDTO);
    return this.httpClient.put<any>(this.URL_API + '/account/password', changePasswordRequestDTO, {headers: this.headers});
  }
}

