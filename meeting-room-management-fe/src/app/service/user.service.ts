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
    'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0cm9uZyIsImV4cCI6MTY0Mjc5MzgyMiwiaWF0IjoxNjQyNzU3ODIyfQ.tKlM0R5yyrpglxZftofB5E9SnWK_PpZq58PseCa4NxPOICUSMP71sDn17OE1ElzGGA2JTc2d5AZAIWLHdizxJg'
  });


  constructor(private httpClient: HttpClient) {
  }

  changePassword(changePasswordRequestDTO: ChangePasswordRequestDTO): Observable<boolean> {
    console.log(changePasswordRequestDTO);
    return this.httpClient.put<boolean>(this.URL_API + '/account/password', changePasswordRequestDTO, {headers: this.headers});
  }

}

