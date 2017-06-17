import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

export class CardNote {
  constructor(public nom: String, public image: String, public route: String, public note: number){
  }
  public etoiles():number[]{
    return Array(this.note).fill(this.note);
  }
}

@Component({
  selector: 'card-slider-note',
  templateUrl: './card-slider-note.component.html',
  styleUrls: ['./card-slider-note.component.css']
})
export class CardSliderNoteComponent implements OnInit {

  @Input() public cards: Array<CardNote>;
  @Input() public titre: String;

  constructor(public router: Router) {
  }

  ngOnInit() {  }

}
