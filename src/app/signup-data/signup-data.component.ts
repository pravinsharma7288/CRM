import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { signupElement } from './signupElement';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-signup-data',
  templateUrl: './signup-data.component.html',
  styleUrls: ['./signup-data.component.css']
})
export class SignupDataComponent implements OnInit {
  private apiUrl = "http://localhost:8888/user"
  details : signupElement = {
    fullName:'',
    email:'',
    mobile:0,
    propertyAdd:'',
    city:'',
    state:''
  }
  cities : any[] = [
                      {name : 'Pune'},  
                      {name : 'Mumbai'}
                   ]
  valid(form: NgForm) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      this.http.post(this.apiUrl,form.value,options).map((res:Response)=>res.json()).subscribe(data => {
        console.log(data);

      });
       form.reset();      
      //console.log(form.value);
      //this.details.fullName = form.value.fullName;
      //this.details.email = form.value.email;
      //this.details.mobile = Number(form.value.mobile);
      //this.details.propertyAdd = form.value.propertyAdd;
      //this.details.city = form.value.city;
      //this.details.state = form.value.state;
      //console.log(this.details); 
  }
  constructor(private http : Http) { 
  }
  ngOnInit() {
  }
}
