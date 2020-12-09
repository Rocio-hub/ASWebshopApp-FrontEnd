import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {UsersListComponent} from "./users/users-list/users-list.component";
import {RouterModule, Routes} from "@angular/router";
import {UserDetailsComponent} from "./users/user-details/user-details.component";
import {UserAddComponent} from "./users/user-add/user-add.component";
import {UserUpdateComponent} from "./users/user-update/user-update.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'users', component: UsersListComponent},
  {path:'users/:id', component: UserDetailsComponent},
  {path:'user-add', component: UserAddComponent},
  {path:'user-update/:id', component: UserUpdateComponent}
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
