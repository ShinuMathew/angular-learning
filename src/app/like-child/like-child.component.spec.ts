import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeChildComponent } from './like-child.component';

describe('LikeChildComponent', () => {
  let component: LikeChildComponent;
  let fixture: ComponentFixture<LikeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
