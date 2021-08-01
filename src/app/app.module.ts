import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses/courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { HeaderComponent } from './header/header.component';
import { SummaryPipe } from './summary.pipe';
import { DoctorsComponent } from './doctors/doctors.component';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { DoctorsService } from './services/doctors.service';
import { SearchBoxComponent } from './search-box/search-box.component';
import { TileCasePipe } from './tilecase.pipe';
import { FavoriteComponent } from './favorite/favorite.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { CourseFormComponent } from './course-form/course-form.component'


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
    CourseFormComponent
  ],
  // All the modules, external import go here
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  // All the service classes go here
  providers: [
    CoursesService,
    DoctorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
