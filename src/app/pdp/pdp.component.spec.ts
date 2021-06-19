import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdpComponent } from './pdp.component';

describe('PdpComponent', () => {
  let component: PdpComponent;
  let fixture: ComponentFixture<PdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
