import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../services/courses.service';
import {Course} from '../model/courses';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  
  constructor(public coursesService : CoursesService) { }

  public formOutput : string;
  public registeredCourse : string;
  public showSuccess: boolean;
  public courses : Course[];

  ngOnInit(): void {
    this.courses = this.coursesService.getCourseType()
  }

  log(field) {
    console.log(field)
  }

  registerCourse(courseForm) {
    console.log(courseForm.value)
    this.formOutput = JSON.stringify(courseForm.value)
    this.showSuccess = true
    this.registeredCourse = courseForm.value.courseName
    setTimeout(() => this.showSuccess = false, 2000)
  }

}
