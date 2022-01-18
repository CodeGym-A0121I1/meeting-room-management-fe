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
    'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0cm9uZyIsImV4cCI6MTY0MjUzMDcyNCwiaWF0IjoxNjQyNDk0NzI0fQ.J6A6G2S5M9ybcwYun4qwSx7yfsMme95NMDap-V3zTHzQtP3bHRiwNsqlv3i4miFsMOqa2XNu1QamCYWLo5QFhA'
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
