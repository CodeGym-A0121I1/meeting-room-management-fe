import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {UserDTO} from "../model/DTO/UserDTO";
import {DepartmentDTO} from "../model/DTO/DepartmentDTO";
import {AccountDTO} from "../model/DTO/AccountDTO";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL = 'http://localhost:8080/api/users';
  users: UserDTO[]  [];

  constructor(private httpClient: HttpClient) { }

  public createUser(user: UserDTO): Observable<UserDTO> {
    return this.httpClient.post<UserDTO>(`${this.userURL}/add/user`, user, {responseType: 'json'});
  }

  public createAccount(account: AccountDTO): Observable<AccountDTO> {
    return this.httpClient.post<AccountDTO>(`${this.userURL}/add/account`, account, {responseType: 'json'});
  }

  public getAllDepartments(): Observable<DepartmentDTO[]> {
    return this.httpClient.get<DepartmentDTO[]>(`${this.userURL}/department`, {responseType: 'json'});
  }

  public getAllUsername(): Observable<String[]> {
    return this.httpClient.get<String[]>(`${this.userURL}/username`, {responseType: 'json'});
  }
}
