import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { User } from '../user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    private alertifyService: AlertifyService) { }

  UserAddForm!: FormGroup
  usr: User = new User()

  ngOnInit(): void {
    this.createUserAddForm()
  }

  createUserAddForm() {
    this.UserAddForm = this.formBuilder.group(
      {
        password: ["", Validators.required],
        email: ["", Validators.required],
        username: ["", Validators.required],
      }
    )
  }

  addUser(){
    if(this.UserAddForm.valid){
      this.usr = this.UserAddForm.value as User
      this.accountService.addUser(this.usr).subscribe(data => {
        this.alertifyService.success("Başarıyla Eklendi.")
        localStorage.setItem("Token", data.jwt)
        this.router.navigate(["products"])
      })
    }
    else
    this.alertifyService.warning("Lütfen verileri tam giriniz")
  }

}
