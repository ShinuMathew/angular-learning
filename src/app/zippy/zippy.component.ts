import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {


  @Input('title')
  public title : string;

  public addressDisplay : boolean;

  @Output('show-address')
  public showAddressEmitter : EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.addressDisplay = false
  }

  showAddress() {    
    this.addressDisplay = !this.addressDisplay
    this.showAddressEmitter.emit();
  }
}
