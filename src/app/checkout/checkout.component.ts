import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public addressDisplay : string;

  constructor() { }

  ngOnInit(): void {
    this.addressDisplay = "";
  }

  showAddress(type) {
    console.log(this.addressDisplay)
    if(this.addressDisplay == type) {
      console.log("closing")
      this.addressDisplay = "";
    } else {
      this.addressDisplay = type
    }
  }
}
