import {Component, Input, OnInit} from '@angular/core';
import {Salle} from "../../../service/salle";

@Component({
  selector: 'entete-salle',
  templateUrl: './entete-salle.component.html',
  styleUrls: ['./entete-salle.component.css']
})
export class EnteteSalleComponent implements OnInit {

  @Input() public salle: Salle;

  constructor() { }

  ngOnInit() {
  }

}
