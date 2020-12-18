import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {RouterModule, Routes} from "@angular/router";
import {ProductListComponent} from "./products/product-list/product-list.component";
import {CustomerLoginComponent} from "./customers/customer-login/customer-login.component";
import {MyOrdersComponent} from "./my-orders/my-orders.component";
import {MyCartComponent} from "./my-cart/my-cart.component";
import {ProductAddComponent} from "./products/product-add/product-add.component";
import {ProductEditComponent} from "./products/product-edit/product-edit.component";

const routes: Routes = [
  {path:'', component: HomeComponent}, // canActivate: [AuthGuard] },
  {path:'products/:productType', component: ProductListComponent},
  {path:'login', component: CustomerLoginComponent},
  {path:'myorders', component: MyOrdersComponent},
  {path:'mycart', component: MyCartComponent},
  {path:'addproducts', component: ProductAddComponent},
  {path:'edit', component: ProductEditComponent}
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
