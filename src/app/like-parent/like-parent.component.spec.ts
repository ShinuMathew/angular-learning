import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeParentComponent } from './like-parent.component';

describe('LikeParentComponent', () => {
  let component: LikeParentComponent;
  let fixture: ComponentFixture<LikeParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
