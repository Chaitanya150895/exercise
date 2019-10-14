import { Component,OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '123';
  password = '123';

  formData = [
    { for: "username", control: "input", type: "text", label: " ", placeholder: "Enter username", id: "username", control_name: "username" },
    { for: "password", control: "input", type: "text", label: " ", placeholder: "Enter password", id: "password", control_name: "password" },
    {for: "action", control: "button", type: "submit", label: " ", placeholder: "button", id: "action", control_name: "action" },
  ]

  customForm = this.fb.group({
    username: ['123'],
    password: ['123']
  });

  showMsg: string;

  constructor(private fb:FormBuilder, private http:HttpClient, private api: ApiService, private customer: CustomerService, private router: Router) { }

  ngOnInit() {
  }

  tryLogin() {

    let postData = {
      "username":this.username,
      "password":this.password
    }
    this.http.post("http://localhost/app/api/users/token.json", postData, httpOptions)
    .pipe(
    ).subscribe(data => {
      console.log(data);
      let token = data['data']['token'];      
      console.log("=============>" + token)
      this.customer.setToken(token);
      this.router.navigateByUrl('/add');
     
    });

   
  }

}
