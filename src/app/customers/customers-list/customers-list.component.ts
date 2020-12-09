import { Component, OnInit } from '@angular/core';
import {Customer} from "../../shared/models/customer";
import {CustomerService} from "../../shared/customer.service";

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    //Use the data it gets from the service
   this.refresh();
  }

  refresh() {
    this.customerService.getCustomers()
      .subscribe(listOfCustomers => {
        this.customers = listOfCustomers;
      });
  }

  deleteCustomerById(id: number){
    this.customerService.deleteCustomerById(id)
      .subscribe(message => {
        console.log('Deleted customer, got message: '+message);
        this.refresh();
        });
  }
}
