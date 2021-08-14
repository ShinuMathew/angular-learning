import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppError } from '../common/errors/app-error';
import { UnexpectedError } from '../common/errors/app-errors/unexpected-error';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { NO_COURSE_FOUND, UNEXPECTED_ERROR } from '../common/errors/errors'

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  @Input('is-updated') isUpdated: boolean;
  @Output('is-deleted') isDeleted: EventEmitter<Course> = new EventEmitter<Course>();
  @Output('is-update-course') isUpdateCourse: EventEmitter<Course> = new EventEmitter<Course>();
  @Output('show-delete-modal') showDeleteModal: EventEmitter<Course> = new EventEmitter<Course>();

  public courseLoadError: boolean;
  public courseDeleteSuccess: boolean;
  public courseEmpty: boolean;
  public deletedCourse: Course;
  public courses: Course[];
  public errorMessage: string;

  constructor(public courseService: CourseService) {
    this.courseLoadError = false
    this.courseDeleteSuccess = false
    this.courseEmpty = false
  }

  ngOnInit(): void {
    this.loadCourses()
  }

  loadCourses() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses as Course[]
      if (this.courses.length == 0) {
        this.courseEmpty = true
        this.errorMessage = NO_COURSE_FOUND.message
      }        
    }, (error: AppError) => {
      if (error instanceof UnexpectedError) {
        this.courseLoadError = true
        this.errorMessage = UNEXPECTED_ERROR.message
      }
    });
  }

  triggerDeleteModalOpen(course) {
    this.showDeleteModal.emit(course)
  }

  deleteCourse(course) {
    this.courseService.deleteCourse(course.course_id).subscribe(res => {
      this.ngOnInit()
      this.isDeleted.emit(course)
      this.courseDeleteSuccess = true
      setTimeout(() => this.courseDeleteSuccess = false, 2000)
    })
  }

  updateCourse(course) {
    this.isUpdateCourse.emit(course)
  }

}