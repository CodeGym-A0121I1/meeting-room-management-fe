import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AccountDTO} from "../../../model/DTO/AccountDTO";
import {UserDTO} from "../../../model/DTO/UserDTO";
import {DepartmentDTO} from "../../../model/DTO/DepartmentDTO";
import {ERole} from "../../../model/ERole";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  createUser: FormGroup;
  account: AccountDTO;
  user: UserDTO;
  listDepartment: DepartmentDTO[] = [];
  roles = Object.values(ERole);

  constructor(private formBuilder: FormBuilder, private router: Router,
              private userService: UserService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
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
    if (this.createUser.valid) {
      this.convertToDto();
      this.userService.createAccount(this.account).subscribe(() => {
        this.userService.createUser(this.user).subscribe(() => {
          this.snackBar.open("Thêm mới thành công", "OK")
        })
      });
    }
  }

  getKeyName(value: string) {
    return Object.entries(ERole).find(([key, val]) => val === value)?.[0];
  }

  getDepartments() {
    this.userService.getAllDepartments().subscribe((data: DepartmentDTO[]) => this.listDepartment = data);
  }

  convertToDto() {
    let account: AccountDTO = {
      username: this.createUser.value.username,
      password: this.createUser.value.password,
      role: this.createUser.value.role
    }

    let department: DepartmentDTO = new DepartmentDTO(this.createUser.value.department);

    let user: UserDTO = {
      fullName: this.createUser.value.fullName,
      account: account,
      department: department
    }

    this.account = account;
    this.user = user;
  }
}
