import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor() { }

  public favTitle : string = "I have not been clicked yet... :("
  public isFavorite : boolean = true
  @Input('statustxt') public status : string
  @Output() change = new EventEmitter();

  onFavClick() {
    this.isFavorite = !this.isFavorite  
    this.change.emit({isFav : this.isFavorite})  
    if(!this.isFavorite) {
      this.favTitle = "I have been activated !!! :D"
      this.status = "DEACTIVATE"
    }
    else{
      this.favTitle = "I have been deactivated... :'("
      this.status = "ACTIVATE"
    }
  }

  ngOnInit(): void {
    this.change.emit({isFav : this.isFavorite})  
  }

}
