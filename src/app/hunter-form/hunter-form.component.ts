import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GoogleMapsService } from '../google-maps.service';

@Component({
   selector: 'app-hunter-form',
   templateUrl: './hunter-form.component.html',
   styleUrls: ['./hunter-form.component.css'],
   providers: [ GoogleMapsService ]
})

export class HunterFormComponent {

   address: any[] = null;
   coordinates: any[] = null;

   constructor(private googleService: GoogleMapsService) { }

   getAddress(lat: string, long: string) {
      this.googleService.getByLatLong(lat, long).subscribe(response => {
         this.address = response.json().results[0].formatted_address;
         console.log(this.address);
      });
   }

   getCoordinates(number: string, street: string, city: string, state: string, zip: string, country: string) {
      this.googleService.getByAddress(number, street, city, state, zip, country).subscribe(response => {
         this.coordinates = response.json().results[0].geometry.location;
         console.log(this.coordinates);
      });
   }

}
