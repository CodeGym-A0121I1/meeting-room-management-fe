import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import * as $ from 'jquery'
import {Router} from "@angular/router";

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent implements OnInit {
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
