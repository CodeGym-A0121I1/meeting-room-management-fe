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

  public getAllDepartments(): Observable<DepartmentDTO[]> {
    return this.httpClient.get<DepartmentDTO[]>(`${this.userURL}/department`, {responseType: 'json'});
  }

  public getAllUsername(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.userURL}/username`, {responseType: 'json'});
  }

  // public createUser(user: UserDTO): Observable<UserDTO> {
  //   return this.httpClient.post<UserDTO>(`${this.userURL}/add`, user, {responseType: 'json'});
  // }
  //
  // public createAccount(account: AccountDTO): Observable<AccountDTO> {
  //   return this.httpClient.post<AccountDTO>(`${this.userURL}/add`, account, {responseType: 'json'});
  // }

  public createNewUser(newAccount: AccountDTO, newUser: UserDTO): Observable<UserDTO> {

    this.httpClient.post<AccountDTO>(`${this.userURL}`, newAccount, {responseType: 'json'});
    return this.httpClient.post<UserDTO>(`${this.userURL}`, newUser, {responseType: 'json'});
  }
}
