import { Component, OnInit } from '@angular/core';

export class Facility {
  public name: String;
  public price: Number;
  public selected: boolean;
}

export class Reservation {
  public morning: boolean = false;
  public afternoon: boolean = false;
  public facilities: Array<Facility> = [];
  public whoIsHere: Array<String> = [];
}

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  public facilities: Array<Facility> = [
    { name: 'coffee', price: 7.5, selected: false },
    { name: 'visio', price: 100, selected: false },
    { name: 'edredon', price: 1000, selected: false },
    { name: 'hotesse', price: 500, selected: false }
  ];

  public salle: any = {
    "nom": "Mont Saint Michel",
    "cheminPhoto": "/images/vos-collegues-aiment/r-8-1.jpg",
    "prix": 100,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl magna, laoreet at mauris at, fermentum fringilla metus. Nam ut nisl id augue placerat sagittis.",
    "notation": 4,
    "nombrePlaces": 8,
    "adresse": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "experience": "meeting",
    "etage": 3,
    "bureau": 301
  };

  public reservation: Reservation = new Reservation();

  constructor() { }

  ngOnInit() {
  }

  public total() : Number {
    return this.facilities.filter(facility => facility.selected).reduce((total, element) => total+element.price.valueOf(), 0);
  }

}
