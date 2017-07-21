import { Injectable } from '@angular/core';
import { GeoObject } from './geo-object.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GeoObjectService {

   geoObjects: FirebaseListObservable<any[]>;

   constructor(private database: AngularFireDatabase) {
      this.geoObjects = database.list('geoObjects');
   }

}
