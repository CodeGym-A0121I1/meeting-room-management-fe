import {Component, OnInit, ViewChild} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import {ChangePasswordRequestDTO} from "../../../models/dto/ChangePasswordRequestDTO";
import {UserService} from "../../../service/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-change-password-user',
  templateUrl: './change-password-user.component.html',
  styleUrls: ['./change-password-user.component.css']
})
export class ChangePasswordUserComponent implements OnInit {

  changePasswordRequestDTO: ChangePasswordRequestDTO = new class implements ChangePasswordRequestDTO {
    newPassword: string | any;
    oldPassword: string | any;
    username: string | any;
  };
  checkOldPassword = false;

  constructor(private userService: UserService,
              private matSnackBar: MatSnackBar) {
  }

  formChangePassword = new FormGroup({
    oldPassword: new FormControl('', [Validators.required]),
    pwGroup: new FormGroup({
      newPassword: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    }, this.checkMatchPassword)
  });

  ngOnInit(): void {

  }

  checkMatchPassword(control: AbstractControl) {
    let pwGroup = control.value;
    if (pwGroup.newPassword !== pwGroup.confirmPassword) {
      return {passwordDontMatch: true};

    }
    return null;
   }

  onSubmit() {
    if (this.formChangePassword.valid) {
      // gáng cứng, sau này fix sau
      this.changePasswordRequestDTO.username = "trong";
      this.changePasswordRequestDTO.oldPassword = this.formChangePassword.value.oldPassword;
      this.changePasswordRequestDTO.newPassword = this.formChangePassword.value.pwGroup.newPassword;
      this.userService.changePassword(this.changePasswordRequestDTO).subscribe(
        (data) => {
          this.matSnackBar.open("Thay đổi mật khẩu thành công", "Đóng", {
            duration: 3000
          });
          this.formChangePassword.reset();
          this.checkOldPassword = false;
        },
        (error) => {
          this.checkOldPassword = true;

        }
      );
    }

  }

}
