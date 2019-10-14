import { Component,OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/http.service';
import { ListComponent } from 'src/app/list/list.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @ViewChild('child',null) child:ListComponent;
  showMsg:any;
  formData = [
    {for: "title",control:"input" , type:"text",label:" ", placeholder:"Create Title", id:"title",control_name:"title"},
    {for: "content",control:"input" , type:"text", label:" ", placeholder:"Create Content (min 500 words)", id:"content",control_name:"content"},
    {for: "action", control: "button", type: "submit", label: " ", placeholder: "button", id: "action", control_name: "action" },
  ]

  customForm = this.fb.group({
    title: [''],
    content: ['']
  });

  constructor(private fb:FormBuilder, private httpService: HttpService) { }
  ngOnInit() { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.customForm.value);
    console.log("submit :: add:::" + this.customForm.value.add)
    this.httpService.postHttp("stuffs.json", this.customForm.value)
      .pipe(
      ).subscribe(data => {
        console.log(data);
        this.customForm.reset();
        this.showMsg="Posted";
        this.child.reloadData();
      });
  }
}
