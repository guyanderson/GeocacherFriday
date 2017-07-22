import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { geoKey, masterFirebaseConfig } from './api-keys';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { HunterFormComponent } from './hunter-form/hunter-form.component';
import { LocationComponent } from './location/location.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AdminComponent } from './admin/admin.component';


export const firebaseConfig = {
   apiKey: masterFirebaseConfig.apiKey,
   authDomain: masterFirebaseConfig.authDomain,
   databaseURL: masterFirebaseConfig.databaseURL,
   storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
   declarations: [
      AppComponent,
      WelcomeComponent,
      AboutComponent,
      HunterFormComponent,
      LocationComponent,
      AdminComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      routing,
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireDatabaseModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})

export class AppModule { }
