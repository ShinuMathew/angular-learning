import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  public contactMethod : object[] = [
    { id: 1, name: 'Email'},
    { id: 2, name: 'Phone'},
    { id: 3, name: 'Whatsapp'}
  ]

  public genders : string[] = [
    'Male',
    'Female',
    'Transgender'
  ]
  ngOnInit(): void {
  }

  log(firstName) {
    console.log(firstName)
  }

  submit(forms) {
    console.log(forms.value)
  }

}
