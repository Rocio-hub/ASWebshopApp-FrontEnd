import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/user";
import {UserService} from "../../shared/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User;

  constructor(private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = (Number)(this.route.snapshot.paramMap.get('id'));
     this.userService.getUserById(id)
       .subscribe(userFromRest => {
         this.user = userFromRest;
       });
  }

}
