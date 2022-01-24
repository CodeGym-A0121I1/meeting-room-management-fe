import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Account} from "../../../model/user/Account";
import {UserDTO} from "../../../model/DTO/UserDTO";
import {Department} from "../../../model/user/Department";
import {ERole} from "../../../model/user/ERole";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  createUser: FormGroup;
  account: Account;
  user: UserDTO;
  listUsername: String[] = [];
  listDepartment: Department[] = [];
  roles = Object.values(ERole);

  constructor(private formBuilder: FormBuilder, private router: Router,
              private userService: UserService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getUsername();
    this.getDepartments();
    this.createUser = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      role: ['', Validators.required],
      fullName: ['', [Validators.required, Validators.maxLength(30)]],
      department: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.createUser.invalid) {
      return;
    } else {
      for (let i = 0; i < this.listUsername.length; i++) {
        if (this.createUser.value.username === this.listUsername[i]) {
          this.snackBar.open("Tên đăng nhập đã tồn tại", "OK");
          return;
        }
      }
      this.convertToDto();
      this.userService.createAccount(this.account).subscribe(() => {
        this.userService.createUser(this.user).subscribe(() => {
          this.createUser.reset();
          this.snackBar.open("Thêm mới thành công", "OK")
        })
      });
    }
  }

  getKeyName(value: string) {
    return Object.entries(ERole).find(([key, val]) => val === value)?.[0];
  }

  getDepartments() {
    this.userService.getAllDepartments().subscribe((data: Department[]) => this.listDepartment = data);
    console.log(this.listDepartment);
  }

  getUsername() {
    this.userService.getAllUsername().subscribe((data: String[]) => this.listUsername = data);
    console.log(this.listUsername);
  }

  convertToDto() {
    let account: Account = {
      username: this.createUser.value.username,
      password: this.createUser.value.password,
      role: this.createUser.value.role
    }

    let department: Department = new Department(this.createUser.value.department);

    let user: UserDTO = {
      fullName: this.createUser.value.fullName,
      account: account,
      department: department
    }

    this.account = account;
    this.user = user;
  }
}
