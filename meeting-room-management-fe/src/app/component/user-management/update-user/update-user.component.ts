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

  formEditUser: FormGroup = this.formBuilder.group({
    full_name: ['', [Validators.required]],
    account: ['', [Validators.required]],
    department: ['', [Validators.required]],
    id: ['', [Validators.required]]
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
            this.formEditUser.setValue(data1)
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
