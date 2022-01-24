import {Injectable} from '@angular/core';

import {UserDTO} from "../model/DTO/UserDTO";
import {Department} from "../model/user/Department";
import {User} from "../model/user/User";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import {ChangePasswordUserComponent} from "../component/user-management/change-password-user/change-password-user.component";
import {ChangePasswordRequestDTO} from "../models/dto/ChangePasswordRequestDTO";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly API_USER: string = "http://localhost:8080/api/users";
  readonly apiDepartment: string = "http://localhost:8080/department";
  readonly apiAccount: string = "http://localhost:8080/account";
  private readonly jwt = this.authService.getToken() || '';

  headers = new HttpHeaders({
    'Authorization': this.jwt
  });

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  editCustomer(user: User) {
    return this.http.put(this.API_USER + "/" + user.id, user, {headers: this.headers});
  }

  getUserById(id: any): Observable<User> {
    return this.http.get<User>(this.API_USER + "/" + id, {headers: this.headers});
  }

  getAllDepartment(): Observable<Array<Department>> {
    return this.http.get<Array<Department>>(this.apiDepartment, {headers: this.headers});
  }



  getAllUser(): Observable<any> {
    return this.http.get<any>(this.API_USER, {headers: this.headers})
  }

  search(userForm: any): Observable<any> {
    let params = new HttpParams()
      .set('username', userForm.username)
      .set('role', userForm.role)
      .set('fullName', userForm.fullName)
      .set('departmentName', userForm.departmentName)
    return this.http.get<any>(this.API_USER + "/search", {headers: this.headers, params: params})
  }

  public createUser(user: UserDTO): Observable<UserDTO> {
    return this.http.post<UserDTO>(`${this.API_USER}/add/user`, user, {headers: this.headers});
  }

  public getAllDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.API_USER}/department`, {headers: this.headers});
  }

  public getAllUsername(): Observable<String[]> {
    return this.http.get<String[]>(`${this.API_USER}/username`, {headers: this.headers});
  }

  getAccountByUsername(username: any): Observable<User> {
    return this.http.get<User>(this.API_USER + "/" + username, {headers: this.headers});
  }

  changePassword(changePasswordRequestDTO: ChangePasswordRequestDTO): Observable<boolean> {
    return this.httpClient.put<boolean>(this.API_USER + '/account/password', changePasswordRequestDTO, {headers: this.headers});
  }
