import { Component, OnInit, ViewChild } from '@angular/core';
import { GithubUsersComponent } from '../github-users/github-users.component';
import { GithubFollowers } from '../model/github-followers';
import { GithubFollowersService } from '../services/github-followers.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  constructor(private githubFollowersService: GithubFollowersService) { }

  @ViewChild(GithubUsersComponent) private githubUsersComponent : GithubUsersComponent;

  public followers : GithubFollowers[]

  ngOnInit(): void {
    this.githubFollowersService.getFollowers().subscribe(followers => {
      this.followers = followers;
    });  
  }
}
