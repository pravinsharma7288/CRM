import { ElementRef, Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { signupElement } from './signupElement';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-signup-data',
  templateUrl: './signup-data.component.html',
  styleUrls: ['./signup-data.component.css']
})
export class SignupDataComponent implements OnInit {
 public latitude : number;
 public longitude: number;
 public zoom : number;
  private apiUrl = "http://localhost:8888/user"
  details : signupElement = {
    fullName:'',
    email:'',
    password:'',
    mobile:0,
    propertyAdd:'',
    city:'',
    state:''
  }
  cities : any[] = [
                      {name : 'Pune'},  
                      {name : 'Mumbai'}
                   ]
  @ViewChild("propertyAdd")
   public searchElementRef: ElementRef;

  valid(form: NgForm) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      form.value.propertyAdd = this.details.propertyAdd;
      this.http.post(this.apiUrl,form.value,options).map((res:Response)=>res.json()).subscribe(data => {
        console.log(data);
        
      });
      form.reset();      
  }
  constructor(private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private http : Http) { 
  }

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
          types: ["address"]
        });
       autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          //verify result
          console.log(place);
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }else{
            this.details.propertyAdd = place.name;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }
}
