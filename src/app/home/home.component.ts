import {Component, OnInit} from "@angular/core";
import {Card} from "./card-slider/card-slider.component";
import {CardNote} from "./card-slider-note/card-slider-note.component";
import {Observable} from "rxjs/Observable";
import {Salle} from "../service/salle";
import {SalleService} from "../service/salle-service";
import {AngularFireAuth} from "angularfire2/auth";
declare var $: any;

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private localisation: string;

  constructor(private salleService: SalleService, private auth: AngularFireAuth) {

  }

  ngOnInit(): void {
    $('#date').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    $('#recherche_popup').modal();
  }

  public experiences: Array<Card> = [
    {nom: 'friends', image: 'experiences/copains.jpg', route: 'reservation/confirmation/5?withFriends=true'},
    {nom: 'zen', image: 'experiences/zen.jpg', route: 'reservation/resultat/experience/zen'},
    {nom: 'ideation', image: 'experiences/creation.jpg', route: 'reservation/resultat/experience/ideation'},
    {nom: 'focus', image: 'experiences/concentration.jpg', route: 'reservation/resultat/experience/focus'},
    {nom: 'meeting', image: 'experiences/reunir.jpg', route: 'reservation/resultat/experience/meeting'}
  ];

  public contactsLove: Array<CardNote> = [
    {nom: 'friends', image: 'experiences/copains.jpg', route: 'reservation/confirmation/5?withFriends=true', note: 3},
    {nom: 'zen', image: 'experiences/zen.jpg', route: 'reservation/resultat/experience/zen', note: 4},
    {nom: 'ideation', image: 'experiences/creation.jpg', route: 'reservation/resultat/experience/ideation', note: 5},
    {nom: 'focus', image: 'experiences/concentration.jpg', route: 'reservation/resultat/experience/focus', note: 2}
  ];

  public preferees(): Observable<Card[]> {
    return this.salleService.recupereLesSallesPreferePourUnUtilisateur('29')
      .map((snapshots) => {
        console.log(JSON.stringify(snapshots));
      return snapshots.map((item) => {
        console.log(JSON.stringify(item));
        return new Card(item.nom,item.cheminPhoto,'reservation/confirmation/'+item.identifiantSalle);
      })
    });
  };
}
