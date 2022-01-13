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
      'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0cm9uZyIsImV4cCI6MTY0MjA5NTc2OCwiaWF0IjoxNjQyMDU5NzY4fQ.pgaDLmamzjb6kiSFexDxIwThwGs4JXLftjcqdqoF0NtGEm7xkR5dMe68XZmk1RvN9qOSp7xU_y5Xrga9cDs3eA'
    } );





  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAllUser(): Observable<any> {
    return this.httpClient.get<any>(this.URL_API, { headers : this.headers})
  }

  search(name: string, role: string): Observable<any> {
    let params = new HttpParams()
      .set('name', name)
      .set('role', role);
    return this.httpClient.get<any>(this.URL_API + "/search", {headers: this.headers, params: params})
  }
}
