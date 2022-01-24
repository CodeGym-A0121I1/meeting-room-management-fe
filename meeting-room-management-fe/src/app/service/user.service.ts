import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import set = Reflect.set;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_API = "http://localhost:8080/api/users";

  headers = new HttpHeaders({
    'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0cm9uZyIsImV4cCI6MTY0MzAzMTc0NywiaWF0IjoxNjQyOTk1NzQ3fQ.SZRlmCmJE83wKylQxVIZIEx2LDnTT00KY7L3LoORSALlGg6xU1vxlkgVWsDSkGZ0CNX76Z0qwy85O97NjPVkbw'
  });


  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAllUser(): Observable<any> {
    return this.httpClient.get<any>(this.URL_API, {headers: this.headers})
  }

  search(userForm: any): Observable<any> {
    let params = new HttpParams()
      .set('username', userForm.username)
      .set('role', userForm.role)
      .set('fullName', userForm.fullName)
      .set('departmentName', userForm.departmentName)
    return this.httpClient.get<any>(this.URL_API + "/search", {headers: this.headers, params: params})
  }
}
