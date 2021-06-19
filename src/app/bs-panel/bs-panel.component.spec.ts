import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsPanelComponent } from './bs-panel.component';

describe('BsPanelComponent', () => {
  let component: BsPanelComponent;
  let fixture: ComponentFixture<BsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
