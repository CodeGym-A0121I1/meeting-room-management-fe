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
    newPassword: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {

  }

  checkMatchPassword(control: AbstractControl) {
    let newPassword = control.value.get('newPassword');
    let confirmPassword = control.value.get('confirmPassword');
    if (newPassword !== confirmPassword) {
      return {DontMatch: true};
    }
    return null;
  }

  onSubmit() {
    if (this.formChangePassword.valid) {
      // gáng cứng, sau này fix sau
      this.changePasswordRequestDTO.username = "trong";
      this.changePasswordRequestDTO.oldPassword = this.formChangePassword.value.oldPassword;
      this.changePasswordRequestDTO.newPassword = this.formChangePassword.value.newPassword;
      this.userService.changePassword(this.changePasswordRequestDTO).subscribe(
        (data) => {
          this.matSnackBar.open("Thay đổi mật khẩu thành công", "Đóng", {
            duration: 3000
          });
          this.formChangePassword.reset();
        },
        (error) => {
          this.checkOldPassword = true;

        }
      );
    } else {
      this.checkOldPassword = true;

    }
  }

}
