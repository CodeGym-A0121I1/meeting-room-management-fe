import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../../service/login.service";
import {AuthService} from "../../../service/auth.service";
import * as $ from 'jquery'
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  status = "";
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('',[Validators.required])
  })
  constructor(
      private loginService: LoginService,
      private authService: AuthService,
      private router: Router
  ) { }

  ngOnInit(
  ): void {
    $(document).ready(function () {
      $("#show_hide_password a").on('click', function (event) {
        event.preventDefault();
        if ($('#show_hide_password input').attr("type") == "text") {
          $('#show_hide_password input').attr('type', 'password');
          $('#show_hide_password i').addClass("fa-eye-slash");
          $('#show_hide_password i').removeClass("fa-eye");
        } else if ($('#show_hide_password input').attr("type") == "password") {
          $('#show_hide_password input').attr('type', 'text');
          $('#show_hide_password i').removeClass("fa-eye-slash");
          $('#show_hide_password i').addClass("fa-eye");
        }
      });
    });
  }

  login() {
    this.loginService.login(this.loginForm.value).subscribe(
      (data: any) => {
        this.authService.setToken(data.jwtToken);
        this.authService.setRole(data.account.role);
        this.authService.saveUserId(data.userId);
        this.authService.setUser(data.account.username);
      },
      () => {
        this.status = "Username or password was wrong"
      },
      () => {
        if (this.authService.isAdmin()) {
          this.router.navigateByUrl("/room")
        } else {
          this.router.navigateByUrl("/searchroom")
        }
      }
    )
  }
  get username() { return this.loginForm.get('username')!; }
  get password() { return this.loginForm.get('password')!; }
}
