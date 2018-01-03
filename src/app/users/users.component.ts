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
  lat: number = 18.591955;
  lng: number = 73.783826;
  zoom: number = 15;
  mapTypeId: 'roadmap'|'hybrid'|'satellite'|'terrain'|string = 'roadmap'

 userList : userData[] = [];

 editUser(userData) {
   console.log("here I am .....................",userData);
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
