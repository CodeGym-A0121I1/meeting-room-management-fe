import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Department} from 'src/app/model/user/Department';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  listDepartment: Array<Department> = [];

  data5 : any;

  formEditUser: FormGroup = this.formBuilder.group({
    fullName: ['', [Validators.required]],
    account: ['', [Validators.required]],
    department: ['', [Validators.required]],
    id: ['', [Validators.required]],
    role: ['', [Validators.required]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.userService.getAllDepartment().subscribe(
      data => {
        this.listDepartment = data;

        let id = this.activatedRoute.snapshot.params['id'];

        this.userService.getUserById(id).subscribe(
          data1 => {
            console.log(data1);

            this.formEditUser.setValue({
              fullName: data1.fullName,
              account: data1.account,
              department: data1.department,
              id: data1.id,
              role: data1.account.role,
              username: data1.account.username,
              password: data1.account.password
            })
            console.log(this.formEditUser.value.account.username)
          }
        )
      }
    );


  }


  editUser() {
    if (this.formEditUser.valid) {
      this.userService.editCustomer(this.formEditUser.value).subscribe(
        () => {
          this.router.navigateByUrl("user").then(() => this.snackBar.open("Edit successful")._dismissAfter(3000))
        }
      );
    }
  }
}
