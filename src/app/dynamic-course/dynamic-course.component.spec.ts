import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCourseComponent } from './dynamic-course.component';

describe('DynamicCourseComponent', () => {
  let component: DynamicCourseComponent;
  let fixture: ComponentFixture<DynamicCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
