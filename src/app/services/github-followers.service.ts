import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { GithubFollowers } from '../model/github-followers';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService extends DataService {

  constructor(http: HttpClient) {
    super(`https://api.github.com/users/ShinuMathew/followers`, http);
  }

  public getFollowers() {
    return this.getAll().pipe(
      map(this.mapGithubFollowers)
    )
  }

  private mapGithubFollowers(followers) {    
    let githubFollower: GithubFollowers[] = []
    followers.forEach(follower => githubFollower.push({
      id: follower.id,
      avatarUrl: follower.avatar_url,
      followersUrl: follower.followers_url,
      htmlUrl: follower.html_url,
      login: follower.login,
    }))
    return githubFollower
  }
}
