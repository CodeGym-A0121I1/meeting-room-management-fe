import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import * as $ from 'jquery'
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string | null;
  isAdmin: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    //Toggle Click Function
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar, #content').toggleClass('active');
    });
    this.isAdmin = this.authService.isAdmin();
    this.name = this.authService.getUser()
  }

  logOut() {
    localStorage.clear()
    this.router.navigateByUrl("/login")
  }
}
