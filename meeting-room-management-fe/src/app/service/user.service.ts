import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/IUser";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  readonly userURL = "http://localhost:8080/api/users/add";
  // readonly userRoleURL = "http://localhost:3030/role";
  // readonly userDepartmentURL = "http://localhost:3030/department";

  users: User[]  [];

  public createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.apiServerUrl}/api/users/add`, user, {responseType: 'json'});
  }

}
