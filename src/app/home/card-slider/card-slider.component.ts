import {Component, Input, OnInit} from '@angular/core';
import {Card} from "./card";

@Component({
  selector: 'card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.css']
})
export class CardSliderComponent implements OnInit {

  @Input() public cards: Array<Card>;

  public swipeOptions: any;

  constructor() {
    this.swipeOptions = {
      slidesPerView: 4,
      loop: false,
      spaceBetween: 5
    };
  }

  ngOnInit() {  }

}
