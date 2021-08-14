import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { COURSE_TYPE } from '../core/constants/api';
import { Observable, observable, throwError } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CourseTypeService extends DataService {

  constructor(http: HttpClient) { 
    super(`${environment.protocol}://${environment.domain}:${environment.port}${COURSE_TYPE}`, http)
  }

  public getCourseTypes(): Observable<any> {
    return super.getAll();
  }

}
