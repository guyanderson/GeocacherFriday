import { Component, OnInit } from '@angular/core';
import { GeoObject } from '../geo-object.model';
import { GeoObjectService } from '../geo-object.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [GeoObjectService]
})
export class AdminComponent implements OnInit {

  constructor(private geoObjectService: GeoObjectService) { }

  ngOnInit() {
  }

  AddGeoObject(description: string,  lat: number,  long: number,  address: string) {
    var newGeoObject: GeoObject = new GeoObject(description,  lat,  long,  address);
    this.geoObjectService.pushGeoObject(newGeoObject);
  }

}
