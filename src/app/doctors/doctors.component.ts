import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctors';
import { DoctorsService } from './../doctors.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  public doctors : Doctor[];
  public isFavorite : boolean = false;

  constructor(doctorService : DoctorsService) { 
    this.doctors = doctorService.getDoctors();
  }

  ngOnInit(): void {
  }

  addToFavorite() {
    console.log((this.isFavorite) ? "Doctor is favorited" : "Doctor is not favorited")
    this.isFavorite = !this.isFavorite    
  }

}
