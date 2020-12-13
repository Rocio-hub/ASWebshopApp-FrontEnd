import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomersListComponent } from "./customers/customers-list/customers-list.component";
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomerAddComponent } from './customers/customer-add/customer-add.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CustomerUpdateComponent } from './customers/customer-update/customer-update.component';
import { HttpClientModule } from "@angular/common/http";
import { ProductListComponent } from './products/product-list/product-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {CustomerLoginComponent} from "./customers/customer-login/customer-login.component";
import {AuthGuard} from "./_guards/auth.guard";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {MyOrdersComponent} from "./my-orders/my-orders.component";
import {MyCartComponent} from "./my-cart/my-cart.component";


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    CustomerAddComponent,
    CustomerUpdateComponent,
    CustomerLoginComponent,
    ProductListComponent,
    MyOrdersComponent,
    MyCartComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        BsDropdownModule,
        AngularMaterialModule,
    ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
