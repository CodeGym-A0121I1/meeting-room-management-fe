import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
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
    name: new FormControl(''),
    role: new FormControl('')
  })

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

  abc() {
    this.userService.search(this.userForm.value.name, this.userForm.value.role).subscribe(
      (data) => {
        this.userList = data;
        console.log(this.userList)
      }
    )
  }
}
