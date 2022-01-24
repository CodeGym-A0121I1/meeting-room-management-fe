import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {UserDTO} from "../model/DTO/UserDTO";
import {Department} from "../model/user/Department";
import {Account} from "../model/user/Account";
import {User} from "../model/user/User";

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

  getAllDepartment(): Observable<Array<Department>> {
    return this.http.get<Array<Department>>(this.apiDepartment);
  }

  userURL = 'http://localhost:8080/api/users';
  users: UserDTO[]  [];

  public createUser(user: UserDTO): Observable<UserDTO> {
    return this.http.post<UserDTO>(`${this.userURL}/add/user`, user, {responseType: 'json'});
  }

  public createAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(`${this.userURL}/add/account`, account, {responseType: 'json'});
  }

  public getAllDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.userURL}/department`, {responseType: 'json'});
  }

  public getAllUsername(): Observable<String[]> {
    return this.http.get<String[]>(`${this.userURL}/username`, {responseType: 'json'});
  }

  getAllAccount(): Observable<Array<Account>> {
    return this.http.get<Array<Account>>(this.apiAccount);
  }

  getAccountByUsername(username: any): Observable<User> {
    return this.http.get<User>(this.api + "/" + username);
  }

}
