import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressiveFormComponent } from './progressive-form.component';

describe('ProgressiveFormComponent', () => {
  let component: ProgressiveFormComponent;
  let fixture: ComponentFixture<ProgressiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
