import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../../service/login.service";
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";
import {A} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  status = "";
  isRemember=false;
  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  })

  constructor(
    private loginService:LoginService,
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(
  ): void {
    console.log(localStorage)
    if (localStorage.length!=0){

      if (localStorage.getItem('role')=="ROLE_ADMIN"){
          this.router.navigateByUrl("/admin")
      } else
        this.router.navigateByUrl("/user")
    }
  }

  login() {
      this.loginService.login(this.loginForm.value).subscribe(
        (data: any) => {
          if (data.jwtToken != null && data.account != null) {

            this.authService.setToken(data.jwtToken);
            this.authService.setRole(data.account.role);
            this.authService.setName(data.account.user.fullName);
            if (data.account.role == "ROLE_ADMIN") {
              this.router.navigateByUrl("/admin")
            } else if (data.account.role == "ROLE_USER") {
              this.router.navigateByUrl("/user")
            }
          } else {
            this.status = data.status
          }
        }
      )
  }
  get username() { return this.loginForm.get('username')!; }
  get password() { return this.loginForm.get('password')!; }

  checkCheckBoxvalue(event:any) {
    this.isRemember = event.target.checked;

  }
}
