import {Component, OnInit} from '@angular/core';
import {SalleService} from "../service/salle-service";
import {Salle} from "../service/salle";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  public salle: Salle;

  constructor(public rs: SalleService) {
  }

  ngOnInit() {
    return this.rs.recupererLaSalle('5').subscribe((salle) => {
      this.salle = salle;
    });
  }

  public fuck() {
    return JSON.stringify(this.salle);
  };

}
