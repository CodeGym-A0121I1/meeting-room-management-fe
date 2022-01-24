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

  createUserForm: FormGroup;
  account: AccountDTO;
  user: UserDTO;
  listUsername: string[] = [];
  listDepartment: DepartmentDTO[] = [];
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
    this.getDepartments();
    this.getUsername();
    this.userService.getAllUsername().subscribe((data) => {
      this.listUsername = data
    })
  }

  onSubmit() {
    if (this.createUserForm.invalid) {
      return;
    } else {
      this.convertToDto();
      // this.userService.createAccount(this.account).subscribe(() => {
      //     this.userService.createUser(this.user).subscribe(() => {
      //       this.createUserForm.reset();
      //       this.snackBar.open("Thêm mới thành công", "OK")
      //     });
      //   }
      // );
      this.userService.createNewUser(this.account, this.user).subscribe(() => {
        this.createUserForm.reset();
        this.snackBar.open("Thêm mới thành công", "OK");
      });
    }
  }

  getKeyName(value: string) {
    return Object.entries(ERole).find(([key, val]) => val === value)?.[0];
  }

  getDepartments() {
    this.userService.getAllDepartments().subscribe((data: DepartmentDTO[]) => this.listDepartment = data);
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
    let account: AccountDTO = {
      username: this.createUserForm.value.username,
      password: this.createUserForm.value.password,
      role: this.createUserForm.value.role
    }

    let department: DepartmentDTO = new DepartmentDTO(this.createUserForm.value.department);

    let user: UserDTO = {
      fullName: this.createUserForm.value.fullName,
      account: account,
      department: department
    }

    this.account = account;
    this.user = user;
  }
}
