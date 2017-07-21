# _GeoCatcher_

_Geocaching app that helps people translate map coordinates into addresses, and vice versa 7/21/17_

#### By _**Guy Anderson**_

## Description
_Ever heard of Geocaching? Think of it as Pokémon GO for, well actually, I'm not sure who plays it. I'm sure it's exciting, though. Perhaps, not as exciting as playing with this app! But it's close.

App will take user input of latitude and longitude coordinates and return an address, or take a user address, and return latitude and longitude coordinates! Be careful, this can be very addicting!_

## specs
| Behavior | Input | Output |
|---|---|---|
| Program will display a welcome page | none | Welcome to the The Great Geocaching Group! |
| Program will have 3 navigation links | click | see below |
| Home link | click | Will return the user to the welcome page |
| About link | click | Will take the user to an empty about page. |
| Location Finder link | click | Will display 2 forms for users.|
| Get Address form | Text entry of latitude and longitude coordinates: 40.714224, -73.96145 | Will display the matching Street address: Bedford Ave, Brooklyn, NY 11211, USA  |
| Get Coordinates form |Text entry of an address: Bedford Ave, Brooklyn, NY 11211, USA | Will display the matching coordinates: 40.714224, -73.96145 |
| Location data will be gathered using the Google Maps API | See above | See above |


## Setup/Installation Requirements


* _Go to Github repository page._
* _Click the "download or clone" button and copy the link to GeocacherFriday_
* _In your computers terminal type "git clone" & paste the copied link._
* _CD into GeocacherFriday_
* _Open in atom_
* _In terminal run... _
* _$ npm install_
* _$ bower init_
* _$ bower install_
* _$ bower install bootstrap --save_
* _go to https://developers.google.com/maps/documentation/geocoding/start#get-a-key and follow their instructions for getting an API key_
* _create a new file called api-keys.ts in the src/app directory. Follow the example code below._
* _export var geoKey = "your API key here"_
* _$ ng serve_
* _open localhost:4200 in web browser_

## To-Do List

* _Add GeoCatch object._
* _Add GeoCatch object to firebase._
* _Show/hide functionality for search forms._
* _Move displays back into location component._

## Known Bugs

* _No data type verification for user inputs, or missing inputs._

## Technologies Used

_HTML, google maps API, Angular, JavaScript, TypeScript, bower_

### License

Copyright (c) 2017 **_FunGuy Entertainment_**


## GeoCatcher

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
