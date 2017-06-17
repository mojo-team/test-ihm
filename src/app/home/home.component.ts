import {Component, OnInit} from "@angular/core";
declare var $: any;
import {Card} from "./card-slider/card";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    $('#date').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
  }

  public experiences: Array<Card> = [
    { nom: 'zen', image: 'experiences/zen.jpg' },
    { nom: 'création', image: 'experiences/creation.jpg' },
    { nom: 'copains', image: 'experiences/copains.jpg' },
    { nom: 'concentration', image: 'experiences/concentration.jpg' }
  ];

}
