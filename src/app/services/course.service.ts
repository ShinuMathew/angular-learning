import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { COURSE, COURSE_TYPE } from '../core/constants/api';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(public http: HttpClient) { }

  public getCourseTypes() {    
    return this.http.get(`${environment.protocol}://${environment.domain}:${environment.port}${COURSE_TYPE}`)   
  }

  public getCourses() {    
    return this.http.get(`${environment.protocol}://${environment.domain}:${environment.port}${COURSE}`)   
  }
 
  public registerCourse(course) {    
    return this.http.post(`${environment.protocol}://${environment.domain}:${environment.port}${COURSE}`, course)   
  }
}
