import { Component, OnInit } from '@angular/core';

export class Facility {
  public name: String;
  public price: Number;
  public selected: boolean;
}

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  public facilities: Array<Facility> = [
    { name: 'coffee', price: 7.5, selected: false },
    { name: 'visio', price: 100, selected: false },
    { name: 'edredon', price: 1000, selected: false },
    { name: 'hotesse', price: 500, selected: false }
  ];

  constructor() { }

  ngOnInit() {
  }

  public total() : Number {
    return this.facilities.filter(facility => facility.selected).reduce((total, element) => total+element.price.valueOf(), 0);
  }
}
