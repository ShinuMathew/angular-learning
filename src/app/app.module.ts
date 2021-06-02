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
import { DoctorsService } from './doctors.service';
import { SearchBoxComponent } from './search-box/search-box.component';
import { TileCasePipe } from './tilecase.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    HeaderComponent,
    SummaryPipe,
    DoctorsComponent,
    PublicHeaderComponent,
    SearchBoxComponent,
    TileCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    DoctorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
