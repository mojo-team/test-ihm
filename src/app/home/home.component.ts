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


  public preferees: Array<Card> = [
    {nom: 'Tour Eiffel', image: 'vos-collegues-aiment/r-8-2.jpg', route: 'reservation/confirmation/2/false'},
    {nom: 'Mont Saint Michel', image: 'vos-collegues-aiment/r-8-1.jpg', route: 'reservation/confirmation/1/false'},
    {nom: 'Tour de Pise', image: 'vos-collegues-aiment/r-12-3.jpg', route: 'reservation/confirmation/3/false'}

  ];

  public contactsLove: Array<CardNote> = [
    new CardNote('friends', 'experiences/copains.jpg', 'reservation/confirmation/5/true', 3),
    new CardNote('zen', 'experiences/copains.jpg', 'reservation/resultat/experience/zen', 4),
    new CardNote('ideation', 'experiences/copains.jpg', 'reservation/resultat/experience/ideation', 5),
    new CardNote('focus', 'experiences/copains.jpg', 'reservation/resultat/experience/focus', 2)
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
