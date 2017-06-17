import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

export class Card {
  constructor(public nom: String, public image: String, public route: String){
  }
}

@Component({
  selector: 'card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.css']
})
export class CardSliderComponent implements OnInit {

  @Input() public cards: Array<Card>;

  constructor(public router: Router) {
  }

  ngOnInit() {  }

}
