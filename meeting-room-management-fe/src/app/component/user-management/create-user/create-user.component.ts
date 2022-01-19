import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  createUser: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,
              private userService: UserService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.createUser = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      role: ['', Validators.required],
      fullname: ['', [Validators.required, Validators.maxLength(30)]],
      department: ['', Validators.required]
    })
  }

  onSubmit() {
    console.log(this.createUser.value);
    if (this.createUser.valid) {
      this.userService.createUser(this.createUser.value).subscribe(() => {
        this.snackBar.open("Thêm mới thành công", "OK")
        this.router.navigateByUrl("");
      })
    }
  }
}
