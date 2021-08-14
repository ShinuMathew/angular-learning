import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CourseModuleComponent } from './course-module/course-module.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubUsersComponent } from './github-users/github-users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: DoctorsComponent },
  { path: 'followers/:username', component: GithubUsersComponent },
  { path: 'followers', component: GithubFollowersComponent },
  { path: 'courses', component: CourseModuleComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'changepassword', component: ChangePasswordComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
