import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {UserDTO} from "../model/DTO/UserDTO";
import {DepartmentDTO} from "../model/DTO/DepartmentDTO";
import {AccountDTO} from "../model/DTO/AccountDTO";
import {User} from "../model/user/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly api: string = "http://localhost:8080/user";
  readonly apiDepartment: string = "http://localhost:8080/department";
  readonly apiAccount: string = "http://localhost:8080/account";

  constructor(private http: HttpClient) {
  }

  editCustomer(user: User) {
    return this.http.put(this.api + "/" + user.id, user);
  }

  getUserById(id: any): Observable<User> {
    return this.http.get<User>(this.api + "/" + id);
  }

  getAllDepartment(): Observable<Array<DepartmentDTO>> {
    return this.http.get<Array<DepartmentDTO>>(this.apiDepartment);
  }

  userURL = 'http://localhost:8080/api/users';
  users: UserDTO[]  [];

  public createUser(user: UserDTO): Observable<UserDTO> {
    return this.http.post<UserDTO>(`${this.userURL}/add/user`, user, {responseType: 'json'});
  }

  public createAccount(account: AccountDTO): Observable<AccountDTO> {
    return this.http.post<AccountDTO>(`${this.userURL}/add/account`, account, {responseType: 'json'});
  }

  public getAllDepartments(): Observable<DepartmentDTO[]> {
    return this.http.get<DepartmentDTO[]>(`${this.userURL}/department`, {responseType: 'json'});
  }

  public getAllUsername(): Observable<String[]> {
    return this.http.get<String[]>(`${this.userURL}/username`, {responseType: 'json'});
  }

  getAllAccount(): Observable<Array<AccountDTO>> {
    return this.http.get<Array<AccountDTO>>(this.apiAccount);
  }

  getAccountByUsername(username: any): Observable<User> {
    return this.http.get<User>(this.api + "/" + username);
  }

}
