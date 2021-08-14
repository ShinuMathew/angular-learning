import { Component, OnInit } from '@angular/core';
import { GithubFollowers } from '../model/github-followers';
import { GithubFollowersService } from '../services/github-followers.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  constructor(private githubFollowers: GithubFollowersService) { }

  public followers : GithubFollowers[]

  ngOnInit(): void {
    this.githubFollowers.getFollowers().subscribe(followers => {
      this.followers = followers;
    });
  }

}
