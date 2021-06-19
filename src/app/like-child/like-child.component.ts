import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like-child',
  templateUrl: './like-child.component.html',
  styleUrls: ['./like-child.component.css']
})
export class LikeChildComponent implements OnInit {

  @Input('is-liked') public isLikedIp : boolean = true;
  @Output('on-liked') public onLike : EventEmitter<Object> = new EventEmitter<Object>();

  public isLikedIcon : String = 'far fa-heart'
  constructor() { }

  ngOnInit(): void {    
    
  }

  onLikeEvent() {
    console.log(`child ${!this.isLikedIp}`)
    this.isLikedIcon = this.isLikedIp ? 'fas fa-heart' : 'far fa-heart'
    console.log(`Class : ${this.isLikedIcon}`)
    this.onLike.emit(!this.isLikedIp);
  }

}
