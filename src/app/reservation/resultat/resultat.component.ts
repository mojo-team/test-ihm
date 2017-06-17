import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Salle} from "../../service/salle";
import {SalleService} from "../../service/salle-service";

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {

  private salles: Observable<Salle[]>;

  constructor(private route: ActivatedRoute, private salleService: SalleService) {
  }

  ngOnInit() {
    const localite = this.route.snapshot.params["localite"];
    const date = this.route.snapshot.params["date"];
    const attendees = this.route.snapshot.params["attendees"];
    const duree = this.route.snapshot.params["duree"];

    this.salles = this.salleService.recupereLesSalles(localite, date, attendees, duree);
  }

}
