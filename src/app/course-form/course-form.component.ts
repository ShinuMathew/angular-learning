import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Course } from '../model/courses';
import { CourseService } from '../services/course.service';
import {style, state, animate, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(1000, style({opacity:1})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(1000, style({opacity:0})) 
      ])
    ])
  ]
})
export class CourseFormComponent implements OnInit {

  @Output('form-updated') formUpdated: EventEmitter<object> = new EventEmitter();

  public formOutput: object;
  public registeredCourse: string;
  public courseFormItems: string;
  public showSuccess: boolean;
  public showFailed: boolean;
  public courses: Course[];

  constructor(public coursesService: CoursesService, public courseService: CourseService) {  
      this.showSuccess = false;
      this.showFailed = false;
  }


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
    }, error => {
      this.showFailed = true;
      setTimeout(() => {
        this.showFailed = false        
      }, 3000)
    })
  }

}
