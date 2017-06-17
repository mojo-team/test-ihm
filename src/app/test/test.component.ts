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
    this.rs.recupereLesSallesPreferePourUnUtilisateur("29").subscribe((spot)=>{console.log(spot)});
  }

}