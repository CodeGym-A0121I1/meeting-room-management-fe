import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  public setUser(user_id: string) {
    localStorage.setItem('user', user_id);
  }

  public getUser() {
    return localStorage.getItem('user');
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

  public isAdmin() {
    return this.getRole() == 'ROLE_ADMIN'
  }

  public isAuthenticated() {
    return (this.getUser() != null);
  }
}
