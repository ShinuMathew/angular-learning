import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Course } from '../model/courses';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {


  constructor(public coursesService: CoursesService, public courseService: CourseService) { }

  @Output('form-updated') formUpdated: EventEmitter<object> = new EventEmitter();

  public formOutput: object;
  public registeredCourse: string;
  public courseFormItems: string;
  public showSuccess: boolean;
  public courses: Course[];

  ngOnInit(): void {
    this.courseService.getCourseTypes().subscribe(courses => this.courses = courses as Course[]);
  }

  log(field) {
    console.log(field)
  }

  registerCourse(courseForm) {
    this.formOutput = {
      course_id: courseForm.value.courseId,
      course_name: courseForm.value.courseName,
      course_type: courseForm.value.category.description,
      consent: courseForm.value.consent
    }
    this.courseFormItems = JSON.stringify(this.formOutput)
    this.courseService.registerCourse(this.formOutput).subscribe(course => {

      this.registeredCourse = courseForm.value.courseName
      this.showSuccess = true;
      this.formUpdated.emit({ isUpdated: true })      
      setTimeout(() => {
        this.showSuccess = false
        courseForm.reset();
      }, 3000)
    })
  }

}
