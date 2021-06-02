import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public headerText: string = "ANGULAR";
  public isActive: boolean = true;
  public emailAddress: string = "mathewshinu9474@gmail.com"
  public email2Way: string ;
  public summaryText = "Non laborum minim quis aliqua ullamco adipisicing velit magna tempor sunt in magna. Nulla excepteur nulla proident mollit. Ad et sint consectetur aute anim laboris. Ea officia enim id elit anim."

  // PIPES
  public course: any = {
    title: "The Angular Learning",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2021, 3, 1)
  }

  onSave($event) {
    $event.stopPropagation()
    this.isActive = !this.isActive
    console.log($event)
  }

  onClickDiv1() {
    console.log("Div 1 clicked")
  }

  onClickDiv2() {
    // Event bubbles
    console.log("Div 2 clicked")
  }

  onKeyUpWithoutFilter($event) {
    if ($event.keyCode === 13) console.log("ENTER WAS PRESSED")
  }

  onKeyUpWithFilter() {
    console.log("ENTER WAS PRESSED WITH FILTER")
  }

  getValueOldWay(event) {
    console.log(event.target.value)
  }

  getValueTemplateVariable(value) {
    console.log(value)
  }

  onEmailEnter() {
    console.log(this.emailAddress)
  }

  onEmailEnterTemporaryWay(email) {
    console.log(email)
  }
}
