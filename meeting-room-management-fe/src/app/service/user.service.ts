import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import set = Reflect.set;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_API = "http://localhost:8080/api/users";

    headers= new HttpHeaders({
      'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0cm9uZyIsImV4cCI6MTY0MjQ0NjkwOCwiaWF0IjoxNjQyNDEwOTA4fQ.cuMyCbxc4MR-cmJoQ0of9UTmXHLIBOsEYHn6HpWfYAuTjZZRoTkwijyuYIA80oLcAklgz4RPy0eLvtDO_QAdcQ'
    } );


  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAllUser(): Observable<any> {
    return this.httpClient.get<any>(this.URL_API, { headers : this.headers})
  }

  search(userForm :any): Observable<any> {
    let params = new HttpParams()
      .set('username', userForm.username)
      .set('role', userForm.role)
    .set('fullName',userForm.fullName);
    return this.httpClient.get<any>(this.URL_API + "/search", {headers: this.headers, params: params})
  }
}
