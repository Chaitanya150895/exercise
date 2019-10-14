import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
 
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  loading = false;
  showMsg: boolean;

  tableHeaders = [
    "Id",
    "Title",
    "Content",
    "Creation Date & Time",
    "Action"
  ]
  http: any;
  stuffs: any;
  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.loading = true;

    this.httpService.getHttp("stuffs.json?sort=created&direction=desc").subscribe(data => {
      this.loading = false;
      console.log(data);
      this.stuffs = data['data'];
      this.stuffs = this.stuffs.reverse();

    });
  }

  reloadData() {
    this.loading = true;
    console.log("reloadData");
    this.httpService.getHttp("stuffs.json?sort=created&direction=desc").subscribe(data => {
      this.loading = false;
      console.log(data);
      this.stuffs = data['data'];
    });
  }

  onDelete(id, stuffId) {
    this.httpService.deleteHttp("stuffs/"+id+".json").subscribe(data => {

      console.log(data);

      // this.locations = data['data'];
      this.stuffs.splice(stuffId, 1);
      this.showMsg = true;
      this.loading = false;
    });
  }
  }





