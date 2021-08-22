import { TestBed } from '@angular/core/testing';

import { GithubUsersService } from './github-users.service';

describe('GithubUsersService', () => {
  let service: GithubUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
