import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseListComponent } from '../course-list/course-list.component';

@Component({
  selector: 'app-course-module',
  templateUrl: './course-module.component.html',
  styleUrls: ['./course-module.component.css'],  
})
export class CourseModuleComponent implements OnInit {

  @ViewChild(CourseListComponent) private courseListComponent: CourseListComponent;
  
  constructor() {
    this.isUpdated = false
   }

  public isUpdated : boolean;

  ngOnInit(): void {
  }

  setFormUpdated(isUpdated) {    
    this.isUpdated = isUpdated
    console.log("Updating list...")
    this.courseListComponent.updateCourse()
  }

}
