import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  @Input('is-updated') isUpdated : boolean;


  public courses : Course[];
  constructor(public courseService: CourseService) {     
  }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(courses => this.courses = courses as Course[]);       
  }

  updateCourse() {    
    this.courseService.getCourses().subscribe(courses => this.courses = courses as Course[]); 
  }

}
