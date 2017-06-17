import { Component, OnInit } from '@angular/core';
import {RecommandationService} from '../recommandation/recommandation.service'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(public rs :  RecommandationService) { }

  ngOnInit() {
    this.rs.rechercherMeilleurSpot([0.4,0.5,0.7]).subscribe((spot)=>{console.log(spot)});
  }

}
