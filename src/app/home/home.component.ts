import {Component, OnInit} from "@angular/core";
import {Card} from "./card-slider/card-slider.component";
declare var $: any;

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private localisation:string;

  ngOnInit(): void {
    $('#date').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    $('#recherche_popup').modal();
  }

  public experiences: Array<Card> = [
    { nom: 'zen', image: 'experiences/zen.jpg', route: 'reservation/resultat/experience/zen' },
    { nom: 'création', image: 'experiences/creation.jpg', route: 'reservation/resultat/experience/creation' },
    { nom: 'copains', image: 'experiences/copains.jpg', route: 'reservation/resultat/experience/copains' },
    { nom: 'concentration', image: 'experiences/concentration.jpg', route: 'reservation/resultat/experiences/concentration' },
    { nom: 'reunion', image: 'experiences/reunir.jpg', route: 'reservation/resultat/experience/reunir' }
  ];

}
