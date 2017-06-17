import {Component, OnInit} from "@angular/core";
import {Card} from "./card-slider/card-slider.component";
import {CardNote} from "./card-slider-note/card-slider-note.component";
import {Observable} from "rxjs/Observable";
import {Salle} from "../service/salle";
import {SalleService} from "../service/salle-service";
import {AngularFireAuth} from "angularfire2/auth";
import {ActivatedRoute} from "@angular/router";
import {Http, Headers, RequestOptions} from "@angular/http";
declare var $: any;

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private localisation: string;

  constructor(private salleService: SalleService, private auth: AngularFireAuth, private route: ActivatedRoute,
              private http: Http) {

  }

  ngOnInit(): void {
    $('#date').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    $('#recherche_popup').modal();

    if (this.route.snapshot.queryParams['notification']) {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      this.http.get("https://vivatech.pintade.org/pushavis", options)
        .subscribe(() => {
          window.location.href = "/";
        }, (error) => {
          console.log(error);
        })

    }
  }

  public experiences: Array<Card> = [
    {nom: 'friends', image: 'experiences/copains.jpg', route: 'reservation/confirmation/5/true'},
    {nom: 'zen', image: 'experiences/zen.jpg', route: 'reservation/resultat/experience/zen'},
    {nom: 'ideation', image: 'experiences/creation.jpg', route: 'reservation/resultat/experience/ideation'},
    {nom: 'focus', image: 'experiences/concentration.jpg', route: 'reservation/resultat/experience/focus'},
    {nom: 'meeting', image: 'experiences/reunir.jpg', route: 'reservation/resultat/experience/meeting'}
  ];


  public preferees: Array<CardNote> = [
    new CardNote('Tour Eiffel', 'vos-collegues-aiment/r-8-2.jpg', 'reservation/confirmation/2/false', 4),
    new CardNote('Mont Saint Michel', 'vos-collegues-aiment/r-8-1.jpg', 'reservation/confirmation/1/false', 3),
    new CardNote('Tour de Pise', 'vos-collegues-aiment/r-12-3.jpg', 'reservation/confirmation/3/false', 5)
  ];

  public contactsLove: Array<CardNote> = [
    new CardNote('Bordeaux St michel Sodexo', 'vos-collegues-aiment/c-1-2.jpg', 'reservation/confirmation/5/true', 3),
    new CardNote('Coworking Bordeaux victoire', 'vos-collegues-aiment/c-1-3.jpg', 'reservation/resultat/experience/zen', 4),
    new CardNote('Le lab Pôle emploi', 'vos-collegues-aiment/c-2-4.jpg', 'reservation/resultat/experience/ideation', 5),
    new CardNote('Chez Arthur', 'vos-collegues-aiment/c-4-1.jpg', 'reservation/resultat/experience/focus', 2)
  ];

  public getPreferees(): Observable<Card[]> {
    return this.salleService.recupereLesSallesPreferePourUnUtilisateur('29')
      .map((snapshots) => {
        console.log(JSON.stringify(snapshots));
        return snapshots.map((item) => {
          console.log(JSON.stringify(item));
          return new Card(item.nom, item.cheminPhoto, 'reservation/confirmation/' + item.identifiantSalle);
        })
      });
  };
}
