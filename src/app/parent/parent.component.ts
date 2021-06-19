import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ParentComponent implements OnInit {

  
  constructor() { }

  public localText : string;

  public withoutNgModel : string;
  public withNgModel : string;

  ngOnInit(): void {
    this.withoutNgModel = ""
  }

  withoutNgModelChange(value) {
    this.withoutNgModel = value;
  }

  displayValue(value) {
    this.localText = value;
  }

}
