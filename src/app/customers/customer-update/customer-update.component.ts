import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../shared/customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.scss']
})
export class CustomerUpdateComponent implements OnInit {

  id: number;
  customerForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  address: new FormControl('')
  });

  constructor(private customerService: CustomerService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = (Number)(this.route.snapshot.paramMap.get('id'));
    this.customerService.getCustomerById(this.id)
      .subscribe(customerFromRest => {
        this.customerForm.patchValue({
          firstName: customerFromRest.firstName,
          lastName: customerFromRest.lastName,
          address: customerFromRest.address
        });
      });
  }

  save() {
   const customer = this.customerForm.value;
    customer.id = this.id;
    this.customerService.updateCustomer(customer)
      .subscribe(() => {
        this.router.navigateByUrl('/customers');
      });
  }
}
