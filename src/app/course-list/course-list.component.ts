import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';

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

  constructor(public courseService: CourseService) {
    this.courseLoadError = false
    this.courseDeleteSuccess = false
    this.courseEmpty = false
  }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses as Course[]
      if (this.courses.length == 0)
        this.courseEmpty = true
    }, error => {
      console.error(`ERROR=======>\n${error}`)
      if (error) {
        console.error(`ERROR=======>\n${error}`)
        this.courseLoadError = true
      }
    });
  }

  refreshCourse() {
    this.courseService.getCourses().subscribe(courses => this.courses = courses as Course[]);
  }

  triggerDeleteModalOpen(course) {
    this.showDeleteModal.emit(course)
  }

  deleteCourse(course) {
    this.courseService.deleteCourse(course.course_id).subscribe(res => {
      this.ngOnInit()
      console.log('IsDeleted notification emitted')
      this.isDeleted.emit(course)
      this.courseDeleteSuccess = true
      setTimeout(() => {
        this.courseDeleteSuccess = false
      }, 2000)
    })
  }

  updateCourse(course) {
    this.isUpdateCourse.emit(course)
  }

}