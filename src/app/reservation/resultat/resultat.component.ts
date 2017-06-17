import { Component, OnInit } from '@angular/core';
import {Salle} from "../../service/salle";
import {SalleService} from "../../service/salle-service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {
 public salles: Array<Salle>;
  constructor(public salleService:SalleService) { }

  ngOnInit() {
    this.salleService.recupereLesSalles('paris',new Date(),5, 60).subscribe((salles)=>{
    this.salles = salles });
  }

}
