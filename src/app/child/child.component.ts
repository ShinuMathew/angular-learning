import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input('parent-text') public parentTextContent: string
  @Output('child-event') public childEvent: EventEmitter<Object> = new EventEmitter<Object>();

  ngOnInit(): void {
  }

  onTyping(value) {
    this.childEvent.emit({ value: value+" :)" })
  }
}
