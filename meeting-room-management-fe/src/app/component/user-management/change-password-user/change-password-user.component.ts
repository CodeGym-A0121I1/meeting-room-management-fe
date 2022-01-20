import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ChangePasswordRequestDTO} from "../../../models/dto/ChangePasswordRequestDTO";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-change-password-user',
  templateUrl: './change-password-user.component.html',
  styleUrls: ['./change-password-user.component.css']
})
export class ChangePasswordUserComponent implements OnInit {

  changePasswordRequestDTO: ChangePasswordRequestDTO | any;
  constructor( private userService : UserService) { }

  // form1 = new FormGroup({
  //   oldPw: new FormControl(['', [Validators.required]]),
  //   newPw: new FormControl(['', [Validators.required ]]),
    // confirmPw: new FormControl(['', [Validators.required]])
  // } ,this.checkPassword);
  // } );
  form2 = new FormGroup({
    username: new FormControl('',Validators.required),
    oldPassword: new FormControl('',Validators.required),
    newPassword : new FormControl('',Validators.required)
  } );
  ngOnInit(): void {

  }
  // checkPassword(control : AbstractControl) {
  //   let newPwd2 = control.value.get('newPw');
  //   let confirmPwd2 = control.value.get('confirmPw');
  //   if(newPwd2 !== confirmPwd2){
  //     return { pwdsDontMatch: true };
  //   }
  //   return null;
  //

  onSubmit( ) {
    this.changePasswordRequestDTO = this.form2.value;
    console.log(this.changePasswordRequestDTO);
    this.userService.changePassword(this.changePasswordRequestDTO).subscribe(
      (data) => {
        console.log(data)
      }
    );
  }
  // get oldPw() {
  //   return this.form1.get("oldPw");
  // }
  // get newPw() {
  //   return this.form1.get("newPw");
  // }
  // get confirmPw() {
  //   return this.form1.get("confirmPw");
  // }

}
