import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../service/user.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  userList: any;
  p: any;

  userForm = new FormGroup({
    username: new FormControl(''),
    role: new FormControl(''),
    fullName : new FormControl(''),
    departmentName: new FormControl('')
  });

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(
      (data: any) => {
        this.userList = data
      }
    )
  }

  openDialogDelete(id: any) {

  }

  onSubmit() {
    this.userService.search(this.userForm.value).subscribe(
      (data) => {
        this.userList = data;
        this.p =1 ;
      }
    )
  }
}
