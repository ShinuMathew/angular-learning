import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent  {

  public coursesTitle: string = "List of Courses";
  public courses: string[];

  constructor(coursesService : CoursesService) {
    // let coursesService = new CoursesService()
    this.courses = coursesService.getCourses()
  }

  getCourse() {
    return `Hello : ${this.coursesTitle}`
  }

}
