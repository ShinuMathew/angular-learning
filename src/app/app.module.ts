import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SummaryPipe } from './summary.pipe';
import { TileCasePipe } from './tilecase.pipe';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { HeaderComponent } from './header/header.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PdpComponent } from './pdp/pdp.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ProgressiveFormComponent } from './progressive-form/progressive-form.component';
import { BsPanelComponent } from './bs-panel/bs-panel.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { LikeChildComponent } from './like-child/like-child.component';
import { LikeParentComponent } from './like-parent/like-parent.component';
import { FooterComponent } from './footer/footer.component';
import { InputFormatDirective } from './input-format.directive';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { ContactComponent } from './contact/contact.component';
import { ZippyComponent } from './zippy/zippy.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DynamicCourseComponent } from './dynamic-course/dynamic-course.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CourseListComponent } from './course-list/course-list.component'
import { CourseModuleComponent } from './course-module/course-module.component';

import { CourseService } from './services/course.service';
import { DoctorsService } from './services/doctors.service';
import { CourseTypeService } from './services/course-type.service';
import { AppErrorHandler } from './common/errors/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubUsersComponent } from './github-users/github-users.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  // All the component, pipe and directives go here
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    HeaderComponent,
    SummaryPipe,
    DoctorsComponent,
    PublicHeaderComponent,
    SearchBoxComponent,
    TileCasePipe,
    FavoriteComponent,
    PdpComponent,
    ParentComponent,
    ChildComponent,
    ProgressiveFormComponent,
    BsPanelComponent,
    NgcontentComponent,
    LikeChildComponent,
    LikeParentComponent,
    FooterComponent,
    InputFormatDirective,
    LoginModalComponent,
    ContactComponent,
    ZippyComponent,
    CheckoutComponent,
    CourseFormComponent,
    SignUpComponent,
    DynamicCourseComponent,
    ChangePasswordComponent,
    CourseListComponent,
    CourseModuleComponent,
    GithubFollowersComponent,
    GithubUsersComponent,
    NotFoundComponent
  ],
  // All the modules, external import go here
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  // All the service classes go here
  providers: [
    DoctorsService,
    CourseService,
    CourseTypeService,
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
