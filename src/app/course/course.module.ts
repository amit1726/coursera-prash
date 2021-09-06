import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { SearchBarComponent } from '../header/search-bar/search-bar.component';
import { NavBarComponent } from '../header/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CourseComponent
  ]
})
export class CourseModule { }
