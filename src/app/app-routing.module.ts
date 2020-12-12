import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {CustomersListComponent} from "./customers/customers-list/customers-list.component";
import {RouterModule, Routes} from "@angular/router";
import {CustomerDetailsComponent} from "./customers/customer-details/customer-details.component";
import {CustomerAddComponent} from "./customers/customer-add/customer-add.component";
import {CustomerUpdateComponent} from "./customers/customer-update/customer-update.component";
import {ProductListComponent} from "./products/product-list/product-list.component";
import {CustomerLoginComponent} from "./customers/customer-login/customer-login.component";
import {AuthGuard} from "./_guards/auth.guard";
import {MyCartComponent} from "./my-cart/my-cart.component";
import {MyOrdersComponent} from "./my-orders/my-orders.component";

const routes: Routes = [
  {path:'', component: HomeComponent, canActivate: [AuthGuard] },
  {path:'customers', component: CustomersListComponent},
  {path:'customers/:id', component: CustomerDetailsComponent},
  {path:'customer-add', component: CustomerAddComponent},
  {path:'customer-update/:id', component: CustomerUpdateComponent},
  {path:'products/:productType', component: ProductListComponent},
  {path:'login', component: CustomerLoginComponent},
  {path:'orders', component: MyOrdersComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
