import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../shared/services/customer-service/customer.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  customerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private customerService: CustomerService,
              private router: Router) { }

  ngOnInit() {}

  save() {
    const user = this.customerForm.value;
    this.customerService.addUser(user)
      .subscribe(() => {
      this.router.navigateByUrl('/users');
    });
  }
}
