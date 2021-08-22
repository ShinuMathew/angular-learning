import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from '../services/github-followers.service';
import { GithubUsersService } from '../services/github-users.service';

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css']
})
export class GithubUsersComponent implements OnInit {

  constructor(private route: ActivatedRoute, private githubUsersService : GithubUsersService, private githubFollowersService: GithubFollowersService) { 
    this.route.paramMap.subscribe(params => {
      this.username = params.get("username")
      this.githubUsersService.getSpecific(this.username).subscribe(users => this.userProfile = users);
    });    
  }

  public username: string = "";
  public nextUser: string = "";
  public nextUserId: string = "";
  public prevUser: string = "";
  public prevUserId: string = "";
  public userProfile: any = {};
  public followers: any[] = [];

  ngOnInit(): void {
    console.log(`GithubUsersComponent onInit()`)
    this.githubFollowersService.getFollowers().subscribe(followers => {
      this.followers = followers;
      // console.log(this.followers)
    });
  }

  setUsers(direction) {
    let currenuser = this.followers.filter(follower => follower.login == this.username)    
    let index = this.followers.indexOf(currenuser[0])
    if(this.followers.length > 0) {      
      // console.log(this.followers.indexOf(this.followers[index + 1]))
      if(index === 0) {
        this.nextUser = this.followers[index + 1]['login']
        this.nextUserId = this.followers[index + 1]['id']
        this.prevUser = this.followers[this.followers.length - 1]['login']
        this.prevUserId = this.followers[this.followers.length - 1]['id']
      } else if(index === this.followers.length-1) {
        this.nextUser = this.followers[0]['login']
        this.nextUserId = this.followers[0]['id']
        this.prevUser = this.followers[index - 1]['login']
        this.prevUserId = this.followers[index - 1]['id']
      } else {
        this.nextUser = this.followers[index + 1]['login']
        this.nextUserId = this.followers[index + 1]['id']
        this.prevUser = this.followers[index - 1]['login']
        this.prevUserId = this.followers[index - 1]['id']
      }
    }
    if(direction === "NEXT")
      return this.nextUser
    else
      return this.prevUser
  }

}
