import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ProductListComponent } from './products/product-list/product-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {CustomerLoginComponent} from "./customers/customer-login/customer-login.component";
import {AuthGuard} from "./_guards/auth.guard";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {MyOrdersComponent} from "./my-orders/my-orders.component";
import {MyCartComponent} from "./my-cart/my-cart.component";
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import {CommonModule, DatePipe} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CustomerLoginComponent,
    ProductListComponent,
    MyOrdersComponent,
    MyCartComponent,
    ProductEditComponent,
    ProductAddComponent
  ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        BsDropdownModule
    ],
  providers: [AuthGuard, DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
