import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/user";
import {UserService} from "../../shared/user.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    //Use the data it gets from the service
   this.refresh();
  }

  refresh() {
    this.userService.getUsers()
      .subscribe(listOfUsers => {
        this.users = listOfUsers;
      });
  }

  deleteUserById(id: number){
    this.userService.deleteUserById(id)
      .subscribe(message => {
        console.log('Deleted user, got message: '+message);
        this.refresh();
        });
  }
}
