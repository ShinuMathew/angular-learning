import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressive-form',
  templateUrl: './progressive-form.component.html',
  styleUrls: ['./progressive-form.component.css']
})
export class ProgressiveFormComponent implements OnInit {

  constructor() { }

  public progress : string;
  public progressDisplay : string;
  public completedDisplay : string;

  ngOnInit(): void {
    this.progressDisplay = "none";
    this.completedDisplay = "none"
  }

  onload() {
    this.progressDisplay = "block";
    let count = 0;
    setInterval(() => {
      if(count < 100) {
        count += 10;
        this.progress = count+"%";
      } else {
        this.progressDisplay = "none";
        this.completedDisplay = "block";
      }
    }, 500)
  }

}
