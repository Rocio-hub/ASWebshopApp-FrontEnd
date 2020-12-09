import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  id: number;
  userForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  address: new FormControl('')
  });

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = (Number)(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserById(this.id)
      .subscribe(userFromRest => {
        this.userForm.patchValue({
          firstName: userFromRest.firstName,
          lastName: userFromRest.lastName,
          address: userFromRest.address
        });
      });
  }

  save() {
   const user = this.userForm.value;
   user.id = this.id;
    this.userService.updateUser(user)
      .subscribe(() => {
        this.router.navigateByUrl('/users');
      });
  }
}
