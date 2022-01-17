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
    username: new FormControl(''),
    role: new FormControl(''),
    fullName : new FormControl('')
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
        console.log(this.userList)
      }
    )
  }
}
