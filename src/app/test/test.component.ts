import { Component, OnInit } from '@angular/core';
import {SalleService} from "../service/salle-service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(public rs :  SalleService) { }

  ngOnInit() {
    this.rs.recupereLesSallesParExperience('zen').subscribe((spot)=>{console.log(spot)});
  }

}
