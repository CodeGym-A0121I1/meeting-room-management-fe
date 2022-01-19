import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../../service/login.service";
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  status = "";
  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  })
  constructor(
    private loginService:LoginService,
    private authService:AuthService
  ) { }

  ngOnInit(
  ): void {
  }

  login() {
    this.loginService.login(this.loginForm.value).subscribe(
      (data:any)=>{
        this.status="Login successfull"
          this.authService.setToken(data.jwtToken);
          this.authService.setRole(data.account.role);
      },
    ()=>{
        this.status="Username or password was wrong"
    }
    )
  }
  get username() { return this.loginForm.get('username')!; }
  get password() { return this.loginForm.get('password')!; }
}
