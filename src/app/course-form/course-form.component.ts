import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Course } from '../model/courses';
import { CourseService } from '../services/course.service';
import { style, state, animate, transition, trigger } from '@angular/animations';
import { COURSE_ALREADY_REGISTERED } from '../common/errors/errors';
import { AppError } from '../common/errors/app-error';
import { NotFoundError } from '../common/errors/app-errors/not-found-error';
import { BadRequestError } from '../common/errors/app-errors/bad-request-error';
import { CourseTypeService } from '../services/course-type.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(1000, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CourseFormComponent implements OnInit {

  @Output('form-updated') formUpdated: EventEmitter<object> = new EventEmitter();

  public formOutput: object;
  public registeredCourse: string;  
  public showSuccess: boolean;
  public showFailed: boolean;
  public courses: Course[];
  public failureMessage: string;

  constructor(public courseService: CourseService, public courseTypeService: CourseTypeService) {
    this.showSuccess = false;
    this.showFailed = false;
  }

  ngOnInit(): void {
    this.courseTypeService.getCourseTypes().subscribe(courses => this.courses = courses as Course[]);
  }

  registerCourse(courseForm) {
    this.formOutput = {
      course_id: courseForm.value.courseId,
      course_name: courseForm.value.courseName,
      course_type: courseForm.value.category.description,
      consent: courseForm.value.consent
    }
    this.courseService.registerCourse(this.formOutput).subscribe(course => {
      this.registeredCourse = courseForm.value.courseName
      this.showSuccess = true;
      this.formUpdated.emit({ isUpdated: true })
      setTimeout(() => courseForm.reset(), 3000)
    }, (error: AppError) => {
      this.showFailed = true;
      if (error instanceof BadRequestError && error.getErrorMessage() === "CourseAlreadyRegistered")
        this.failureMessage = COURSE_ALREADY_REGISTERED.message.replace('${courseId}', courseForm.value.courseId)
    })
  }
}