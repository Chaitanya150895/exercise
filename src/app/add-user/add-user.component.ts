import { Component,OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/http.service';
import { ListComponent } from 'src/app/list/list.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  formData = [
    { for: "username", control: "input", type: "text", label: " ", placeholder: "Create username", id: "username", control_name: "username" },
    { for: "password", control: "input", type: "text", label: " ", placeholder: "Create password", id: "password", control_name: "password" },
    {for: "action", control: "button", type: "submit", label: " ", placeholder: "button", id: "action", control_name: "action" },
  ]

  customForm = this.fb.group({
    username: [''],
    password: ['']
  });

  showMsg: string;

  constructor(private fb:FormBuilder, private httpService: HttpService) { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.customForm.value);
    console.log("submit :: add-user:::" + this.customForm.value.add)
    this.httpService.postHttp("users.json", this.customForm.value)
      .pipe(
      ).subscribe(data => {
        console.log(data);
        this.customForm.reset();
        this.showMsg="User Created";
        // this.child.reloadData();
      });
  }

}
