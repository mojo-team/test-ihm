import { Component, OnInit } from '@angular/core';
import {Card} from "./card";

@Component({
  selector: 'card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.css']
})
export class CardSliderComponent implements OnInit {

  public cards: Array<Card> = [
    { nom: 'test'},
    { nom: 'test'}
  ];

  constructor() { }

  ngOnInit() {  }

}
