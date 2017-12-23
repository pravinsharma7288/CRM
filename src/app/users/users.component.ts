import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { userData } from './userData';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 private apiUrl = "http://localhost:8888/user"
 userList : userData[] = [];
 loadPage(){
  console.log(".....................sgs");
 }
  constructor(private http: Http) { 
	  http.get(this.apiUrl).map((res:Response)=>res.json()).subscribe(data => {
        //console.log(data);
       this.userList = data;
      });
  }

  ngOnInit() {
  }

}
