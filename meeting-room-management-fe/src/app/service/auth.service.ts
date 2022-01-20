import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken() {
    return localStorage.getItem('jwtToken');
  }

  public setRole(role: string) {
    localStorage.setItem("role", role)
  }

  public getRole() {
    return localStorage.getItem('role')
  }

  public setName(fullName: string) {
    localStorage.setItem("name", fullName)
  }

  public getName() {
    return localStorage.getItem('name')
  }
}
