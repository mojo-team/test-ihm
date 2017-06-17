import {Component, Input, OnInit} from '@angular/core';
import {Salle} from "app/service/salle";

@Component({
  selector: 'description-salle',
  templateUrl: './description-salle.component.html',
  styleUrls: ['./description-salle.component.css']
})
export class DescriptionSalleComponent implements OnInit {

  @Input() public salle: Salle;

  constructor() { }

  ngOnInit() {
  }

  public etoiles():number[]{
    return Array(5).fill(4);
  }

}
