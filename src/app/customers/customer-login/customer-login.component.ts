import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../shared/services/auth-service/authentication.service";
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.scss']
})
export class CustomerLoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted;
  loading;
  errormessage: string = '';

  constructor(private formBuilder: FormBuilder,
              private  router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    //initalize the form group
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    //Reset the login status
    this.authenticationService.logout();
  }

  //getters for easy access to form fields
  get email() {return this.loginForm.get('email');}
  get password() {return this.loginForm.get('password');}

  onSubmit() {

  this.submitted=true;
  //stop if form is invalid
  if (this.loginForm.invalid) return;

  this.loading=true;
  this.authenticationService.login(this.email.value,this.password.value).subscribe(
    success => {
      alertify.success('Login correct');
      this.router.navigate(['/']);
    },
    error => {
    this.errormessage = error.message;
    this.loading = false;
    });
  }
}
