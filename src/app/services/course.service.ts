import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { COURSE, COURSE_TYPE } from '../core/constants/api';
import { Observable} from 'rxjs';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class CourseService extends DataService{

  constructor(http: HttpClient) { 
    super(`${environment.protocol}://${environment.domain}:${environment.port}${COURSE}`, http);
  }

  public getCourses(): Observable<any> {
    return super.getAll();
  }

  public registerCourse(course): Observable<any> {
    return super.post(course);
  }

  public updateCourse(courseId, course): Observable<any> {
    return super.put(courseId, course);
  }

  public deleteCourse(courseId): Observable<any> {
    return super.delete(courseId);
  }
}