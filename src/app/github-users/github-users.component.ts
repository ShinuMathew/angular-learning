import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubUsersService } from '../services/github-users.service';

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css']
})
export class GithubUsersComponent implements OnInit {

  constructor(private route: ActivatedRoute, private githubUsersService : GithubUsersService) { 
    this.route.paramMap.subscribe(params => {
      this.username = params.get("username")
      this.githubUsersService.getSpecific(this.username).subscribe(users => this.userProfile = users);
    });
  }

  public username: string = "";
  public userProfile: any = {};

  ngOnInit(): void {
    
  }

}
