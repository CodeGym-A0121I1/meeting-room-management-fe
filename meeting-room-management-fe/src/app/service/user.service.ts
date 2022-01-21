import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {User} from "../model/user/User";
import {Department} from "../model/department/Department";
import {Account} from "../model/account/Account";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly api: string = "http://localhost:8080/user";
  readonly apiDepartment: string = "http://localhost:8080/department";
  readonly apiAccount: string = "http://localhost:8080/account";

  constructor(private http: HttpClient) { }

  editCustomer(user: User) {
    return this.http.put(this.api + "/" + user.id, user);
  }

  getUserById(id: any): Observable<User> {
    return this.http.get<User>(this.api + "/" + id);
  }

  getAllDepartment(): Observable<Array<Department>> {
    return this.http.get<Array<Department>>(this.apiDepartment);
  }

  getAllAccount(): Observable<Array<Account>> {
    return this.http.get<Array<Account>>(this.apiAccount);
  }

  getAccountByUsername(username: any): Observable<User> {
    return this.http.get<User>(this.api + "/" + username);
  }

}
