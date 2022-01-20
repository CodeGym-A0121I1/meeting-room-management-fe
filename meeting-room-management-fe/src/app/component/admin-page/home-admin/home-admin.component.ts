import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
name:any;
  constructor(
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.name=this.authService.getName();
  }

  logOut() {
    localStorage.clear()
  }
}
