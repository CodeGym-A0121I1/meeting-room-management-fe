import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
  name: any;

  constructor(
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.name=this.authService.getName()
  }

  logOut() {
    localStorage.clear()
  }
}
