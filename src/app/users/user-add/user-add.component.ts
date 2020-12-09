import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared/user.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {}

  save() {
    const user = this.userForm.value;
    this.userService.addUser(user)
      .subscribe(() => {
      this.router.navigateByUrl('/users');
    });
  }
}
