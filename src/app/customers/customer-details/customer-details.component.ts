import { Component, OnInit } from '@angular/core';
import {Customer} from "../../shared/models/customer";
import {CustomerService} from "../../shared/services/customer-service/customer.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  customer: Customer;

  constructor(private customerService: CustomerService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = (Number)(this.route.snapshot.paramMap.get('id'));
     this.customerService.getCustomerById(id)
       .subscribe(customerFromRest => {
         this.customer = customerFromRest;
       });
  }
}
