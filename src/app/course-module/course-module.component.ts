import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseListComponent } from '../course-list/course-list.component';
import { Course } from '../model/courses';
import { style, state, animate, transition, trigger } from '@angular/animations';
import { CourseService } from '../services/course.service';
import { NgForm } from '@angular/forms';

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

  public isUpdated: boolean;
  public courseDeleteSuccess: boolean;
  public deletedCourse: Course;
  public courses: Course[];
  public showSuccess: boolean;
  public showFailed: boolean;
  public showUpdateModal: boolean;
  public showDeleteModal: boolean;
  public shouldDelete: boolean;

  public courseToDelete : Course;
  public courseIdVal: string;
  public courseNameVal: string;
  public courseTypeVal: string;


  constructor(public courseService: CourseService) {
    this.isUpdated = false
    this.shouldDelete = false;
  }
  
  ngOnInit(): void {
    this.showUpdateModal = false;
    this.courseService.getCourseTypes().subscribe(courses => this.courses = courses as Course[]);
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
    this.courseListComponent.refreshCourse()
  }

  openUpdateModal(course) {
    this.showUpdateModal = true;
    this.courseIdVal = course.course_id
    this.courseNameVal = course.course_name
    this.courseTypeVal = course.course_type
    console.log(this.courseIdVal)
  }

  updateCourse(courseForm) {
    let reqBody = {
      course_name: courseForm.value.courseName,
      course_type: courseForm.value.category.description,
      consent: courseForm.value.consent,
    }
    console.log(reqBody)
    this.courseService.updateCourse(this.courseIdVal, reqBody)
      .subscribe(res => {
        this.showSuccess = true
        setTimeout(() => {
          this.showUpdateModal = false;
          this.courseListComponent.refreshCourse()
        }, 3000)
      }, err => this.showFailed = true)
  }

  closeUpdateModal() {
    console.log("Modal closed")
    this.showUpdateModal = false;
  }

  openDeleteModal(course) {
    this.showDeleteModal = true;
    this.courseToDelete = course
    this.courseIdVal = course.course_name
  }

  closeDelelteModal() {
    this.showDeleteModal = false;
  }

  sendDeleteConfirm() {    
    this.courseListComponent.deleteCourse(this.courseToDelete)
    setTimeout(() => this.showDeleteModal = false, 1000)
  }

}
