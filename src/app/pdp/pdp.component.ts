import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.css']
})
export class PdpComponent implements OnInit {

  public status : string = "EXISTING"
  constructor() { }

  ngOnInit(): void {
  }

  onfavchange(isFavorite) {
    console.log("Fav changed: "+isFavorite)
  }
}
