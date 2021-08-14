import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUsersComponent } from './github-users.component';

describe('GithubUsersComponent', () => {
  let component: GithubUsersComponent;
  let fixture: ComponentFixture<GithubUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
