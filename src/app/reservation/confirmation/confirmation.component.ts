import {Component, OnInit} from '@angular/core';

export class Facility {
  public identifiant: number;
  public nom: String;
  public prix: number;
  public reserve: boolean;
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
    {
      identifiant: 2, nom: "Accès WIFI", prix: 10
      ,
      reserve: false
    }, {
      identifiant: 3,
      nom: "Bloc notes / Stylos",
      prix: 5,
      reserve: false
    }, {
      identifiant: 5, nom: "Ecran de projection", prix: 50,
      reserve: false
    }, {
      identifiant: 6,
      nom: "Paper board",
      prix: 10
      ,
      reserve: false
    }, {
      identifiant: 7, nom: "Photocopieur", prix: 20,
      reserve: false
    }, {
      identifiant: 8,
      nom: "Vidéo projecteur",
      prix: 20
      ,
      reserve: false
    }];


  public salle: any = {
    "nom": "Mont Saint Michel",
    "cheminPhoto": "/assets/images/vos-collegues-aiment/r-8-1.jpg",
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

  constructor() {
  }

  ngOnInit() {
  }

  public
  total(): Number {
    return this.facilities.filter(facility => facility.reserve).reduce((total, element) => total + element.prix, 0);
  }

}
