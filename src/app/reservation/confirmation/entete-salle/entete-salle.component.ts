import {AfterViewInit, Component, Input} from '@angular/core';
import {Salle} from "../../../service/salle";
declare var $: any;

@Component({
  selector: 'entete-salle',
  templateUrl: './entete-salle.component.html',
  styleUrls: ['./entete-salle.component.css']
})
export class EnteteSalleComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    //$('.carousel.carousel-slider').carousel({fullWidth: true});
  }

  @Input() public salle: Salle;

  constructor() { }

  ngOnInit() {
  }

}
