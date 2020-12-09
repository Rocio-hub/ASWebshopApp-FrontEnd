import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserAddComponent } from './users/user-add/user-add.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UserUpdateComponent } from './users/user-update/user-update.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    NavBarComponent,
    HomeComponent,
    UserDetailsComponent,
    UserAddComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
