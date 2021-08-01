import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctors';
import { DoctorsService } from './../services/doctors.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  public doctors: Doctor[];
  public isFavorite: boolean = false;
  public isEmpty: boolean = true;
  public viewMode : string;
  public favorites : number[];
  constructor(public doctorService: DoctorsService) {
    this.doctors = doctorService.getDoctors();
  }

  ngOnInit(): void {
    
    setTimeout(() => {
      this.isEmpty = false
    }, 1000)
    this.viewMode = localStorage.getItem('viewMode');
    this.favorites = JSON.parse(localStorage.getItem('favorites')) || []
    this.doctors.map(doc => {
      if(this.favorites.includes(doc.id))
        doc.isFavorite = true;
    })
  }

  addToFavorite(id) {    
    this.doctors[id-1].isFavorite = !this.doctors[id-1].isFavorite
    this.favorites = JSON.parse(localStorage.getItem('favorites')) || []    
    if(this.favorites.includes(id))
      this.favorites.splice(this.favorites.indexOf(id), 1)
    else
      this.favorites.push(id);    
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  setViewMode(view) {
    this.viewMode = view;
    localStorage.setItem('viewMode', this.viewMode);
  }

  loadDoctors() {
    this.isEmpty = true
    this.doctors = this.doctorService.getDoctors();
    this.isEmpty = false
  }

  trackById(index, doctor) {
    return doctor ? doctor.id : undefined
  }
}
