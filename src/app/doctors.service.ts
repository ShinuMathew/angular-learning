import { Injectable } from '@angular/core';
import { Doctor } from './model/doctors'

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor() { }

  public doctors: Doctor[] = [
    { id: 1, name: "Sarthak Patel", address_line1: "No. 4, LSM Colony", address_line2: "Tambaram, Chennai", pincode: 600088, image: "./../assets/resources/images/profilepics/1.jpeg", rating: 4.56, isFavorite: false, degree: { bachelors: 'MBBS', masters: 'MD', doctorate: 'PHD' } },
    { id: 2, name: "Mahesh Sharma", address_line1: "Flat No. 26, Mahendra Anthea", address_line2: "Guindy, Chennai", pincode: 600011, image: "./../assets/resources/images/profilepics/1.jpg", rating: 4.74, isFavorite: false, degree: { bachelors: 'MBBS' } },
    { id: 3, name: "Ankita Mishra", address_line1: "No. 223, R S Puram", address_line2: "Alandur, Chennai", pincode: 600012, image: "./../assets/resources/images/profilepics/10.jpg", rating: 4.23, isFavorite: false },
    { id: 4, name: "Nitin Joseph", address_line1: "No. 33, Jagannathan street", address_line2: "Saidapet, Chennai", pincode: 600021, image: "./../assets/resources/images/profilepics/12.jpeg", rating: 4.65, isFavorite: false, degree: { bachelors: 'MBBS' } },
    { id: 5, name: "Nimita Pramod", address_line1: "14/56, MS Nagar", address_line2: "Royapettah, Chennai", pincode: 600034, image: "./../assets/resources/images/profilepics/11.jpg", rating: 4.90, isFavorite: false },
    { id: 6, name: "Karthik Ramesh", address_line1: "No. 112, Rajesh Puram", address_line2: "KK Nagar, Chennai", pincode: 600101, image: "./../assets/resources/images/profilepics/13.jpeg", rating: 4.74, isFavorite: false, degree: { bachelors: 'MBBS', masters: 'MD' } },
    { id: 7, name: "Samson John", address_line1: "No. 6, R R Complex", address_line2: "Meenambakkam, Chennai", pincode: 600004, image: "./../assets/resources/images/profilepics/15.jpg", rating: 4.88, isFavorite: false },
    { id: 8, name: "Manoj Nair", address_line1: "No. 21, Maranatha Complex", address_line2: "Anna Nagar, Chennai", pincode: 600002, image: "./../assets/resources/images/profilepics/2.jpeg", rating: 4.42, isFavorite: false, degree: { bachelors: 'MBBS', masters: 'MD' } },
    { id: 9, name: "Jibin Mathai", address_line1: "No. 61, Nathar Stree", address_line2: "Porur, Chennai", pincode: 600024, image: "./../assets/resources/images/profilepics/3.jpg", rating: 4.83, isFavorite: false, degree: { bachelors: 'MBBS', masters: 'MD' } },
    { id: 10, name: "Maxwell James", address_line1: "No. 6, RadhaNagar", address_line2: "Guindy, Chennai", pincode: 600004, image: "./../assets/resources/images/profilepics/13.jpeg", rating: 4.83, isFavorite: false }
  ]

  getDoctors() {
    return this.doctors;
  }
}
