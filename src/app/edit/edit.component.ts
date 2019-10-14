import { Component,OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/http.service';
import { ListComponent } from 'src/app/list/list.component';
import { ActivatedRoute } from '@angular/router';
import { OverlayRef } from '@angular/cdk/overlay';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @ViewChild('child',null) child:ListComponent;

  showMsg:any;

  formData = [
    {for: "title", control:"input" , type:"text",label:" ", placeholder:"Create Title", id:"title",control_name:"title"},
    {for: "content", control:"input" , type:"text", label:" ", placeholder:"Create Content (min 500 words)", id:"content",control_name:"content"},
    {for: "action", control: "button", type: "submit", label: " ", placeholder: "button", id: "action", control_name: "action" },
  ]

  customForm = this.fb.group({
    title: [''],
    content: ['']
  });
  id: any;

  constructor(private fb:FormBuilder, private httpService: HttpService, private route:ActivatedRoute) { }
  ngOnInit() { 

    this.route.params.subscribe(params => {
      this.id = params['stuffId']
      //now get the data from stuffs api for based on id param
      this.httpService.getHttp("stuffs/"+this.id+".json").subscribe(data => {
        console.log(data);
       let stuff = data['data'];
      
       //now load the data inside the form
       this.customForm.patchValue(stuff)
      });
    });

  }


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.customForm.value);
    console.log("submit :: edit:::" + this.id)
    this.httpService.putHttp("stuffs/"+this.id+".json", this.customForm.value)
      .pipe(
      ).subscribe(data => {
        console.log(data);
        this.customForm.reset();
        this.showMsg="Changes Done";
        this.child.reloadData();
      });
  }
}