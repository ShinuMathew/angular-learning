import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-parent',
  templateUrl: './like-parent.component.html',
  styleUrls: ['./like-parent.component.css']
})
export class LikeParentComponent implements OnInit {

  public isLiked : boolean = false
  public likeText : String;

  constructor() { 
   
  }

  ngOnInit(): void {
  }

  onLiked() {
    this.isLiked = !this.isLiked;
    console.log(this.isLiked)
  }

  liked($event) {
    this.isLiked = $event;
    console.log(`Parent ${this.isLiked}`)
    this.likeText = this.isLiked ? "Liked" : "Not Liked"
  }

}
