import { Component, Input } from '@angular/core';
import { GoogleMapsService } from '../google-maps.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  providers: [ GoogleMapsService ]
})
export class LocationComponent {

   @Input() childLocation;

  constructor(private googleService: GoogleMapsService) { }

}
