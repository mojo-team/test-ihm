import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SalleService} from "../../service/salle-service";
import {Salle} from "../../service/salle";
import {Http} from "@angular/http";
declare var $: any;

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
}

export class Amis {
  public id: number;
  public nom: String;
  public prenom: String;
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
    },
    {
      identifiant: 9,
      nom: "Food delivery",
      prix: 15,
      reserve: false
    }
  ];


  public salle: Salle;

  public reservation: Reservation = new Reservation();

  public collegues: Array<Amis> = [
    {
      id: 0,
      nom: "Doe",
      prenom: "John"
    },
    {
      id: 1,
      nom: "Samson",
      prenom: "Christophe"
    }
  ];

  constructor(private route: ActivatedRoute, private salleService: SalleService, public http: Http) {
  }

  ngOnInit() {
    console.log(this.route.snapshot.params['salle']);
    return this.salleService.recupererLaSalle(this.route.snapshot.params['salle'])
      .subscribe((salle) => {
        this.salle = salle;
      });
  }

  public done() {
    window.location.href = "/?notification=true"
  }


  total() {
    return this.facilities.filter(facility => {
        return facility.reserve
      }).reduce((total, element) => total + element.prix, 0) + this.salle.prix;
  }

}
