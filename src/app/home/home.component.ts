import {AfterViewInit, Component} from "@angular/core";
import {Router} from "@angular/router";
declare var $: any;

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(private router: Router) {
  }

  ngAfterViewInit(): void {
    $('.slider').slider();
    $('.slider').slider('pause');
  }

  public commencer() {
    this.router.navigate(['/login']);
  }


}
