import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: string | null;
  isAdmin: boolean = false;

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.name = this.authService.getUser()
  }

  logOut() {
    localStorage.clear()
  }
}
