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
    'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0cm9uZyIsImV4cCI6MTY0Mjk4ODY3MiwiaWF0IjoxNjQyOTUyNjcyfQ.uuxn7I6Ww_fVIIwo9G5Tk0CdCmOIgNv7KKsdmG-hf_5ZaRd6lxnp1WfZMMWAcw8i4wF77nns28IhPy1oX_7Rtg'
  });


  constructor(private httpClient: HttpClient) {
  }

  changePassword(changePasswordRequestDTO: ChangePasswordRequestDTO): Observable<boolean> {
    return this.httpClient.put<boolean>(this.URL_API + '/account/password', changePasswordRequestDTO, {headers: this.headers});
  }

}

