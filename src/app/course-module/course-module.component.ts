import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseListComponent } from '../course-list/course-list.component';
import { Course } from '../model/courses';
import { style, state, animate, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-course-module',
  templateUrl: './course-module.component.html',
  styleUrls: ['./course-module.component.css'],
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
export class CourseModuleComponent implements OnInit {

  @ViewChild(CourseListComponent) private courseListComponent: CourseListComponent;

  constructor() {
    this.isUpdated = false
  }

  public isUpdated: boolean;
  public courseDeleteSuccess: boolean;
  public deletedCourse: Course;

  ngOnInit(): void {
  }

  notifyCourseDelete(course) {
    console.log(`IsDeleted notification recieved ${JSON.stringify(course)}`)
    this.courseDeleteSuccess = true;
    this.deletedCourse = course;
    setTimeout(() => {
      this.courseDeleteSuccess = false;
    }, 3000)
  }

  setFormUpdated(isUpdated) {
    this.isUpdated = isUpdated
    console.log("Updating list...")
    this.courseListComponent.updateCourse()
  }

}
