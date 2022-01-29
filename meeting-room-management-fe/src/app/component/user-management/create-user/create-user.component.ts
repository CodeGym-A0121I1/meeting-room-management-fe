import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Account} from "../../../model/user/Account";
import {Department} from "../../../model/user/Department";
import {ERole} from "../../../model/user/ERole";
import {UserDTO} from "../../../model/dto/UserDTO";
import * as $ from "jquery";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  createUserForm: FormGroup;
  account: Account;
  user: UserDTO;
  listUsername: string[] = [];
  listDepartment: Department[] = [];
  roles = Object.values(ERole);
  isExistUsername: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router,
              private userService: UserService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.createUserForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30),
      ]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30),
        Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,30}$')]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30),
        Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,30}$')]],
      role: ['', Validators.required],
      fullName: ['', [Validators.required, Validators.maxLength(30)]],
      department: ['', Validators.required]
    });
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
    this.getDepartments();
    this.getUsername();
    this.userService.getAllUsername().subscribe((data: string[]) => {
      this.listUsername = data
    })
  }

  onSubmit() {
    if (this.createUserForm.invalid) {
      return;
    } else {
      this.convertToDto();
      this.userService.createNewUser(this.user).subscribe(() => {
        this.createUserForm.reset();
        this.snackBar.open("Thêm mới thành công", "OK");
      });
    }
  }

  getKeyName(value: string) {
    return Object.entries(ERole).find(([key, val]) => val === value)?.[0];
  }

  getDepartments() {
    this.userService.getAllDepartments().subscribe((data: Department[]) => this.listDepartment = data);
  }

  getUsername() {
    this.userService.getAllUsername().subscribe((data) => {
      this.listUsername = data
    });
  }

  checkExistUsername(checkUsername: string) {
    this.isExistUsername = false;
    for (let i = 0; i < this.listUsername?.length; i++) {
      if (checkUsername === this.listUsername[i]) {
        this.isExistUsername = true;
      }
    }
  }

  convertToDto() {
    let account: Account = {
      username: this.createUserForm.value.username,
      password: this.createUserForm.value.password,
      role: this.createUserForm.value.role
    }

    let department: Department = new Department(this.createUserForm.value.department);

    let user: UserDTO = {
      fullName: this.createUserForm.value.fullName,
      account: account,
      department: department
    }

    this.account = account;
    this.user = user;
  }
}
