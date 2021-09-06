import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICourse } from 'src/app/course';
import { CourseService } from 'src/app/shared/course.service';
import { SearchService } from 'src/app/shared/search.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() string = '';
  // @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  courses : ICourse[] = [];
  filteredCourse : string = '';
  filteredCourses : ICourse[] = [];
  // courseSearchText : string = this.searchCourse.getSearchText();

  constructor(private courseService : CourseService,
    private searchCourse : SearchService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
    this.filteredCourses = this.courseService.getCourses();
    // this.filteredCourses = this.performFilter(this.searchCourse.getSearchText());
    // this.searchCourse.searched.subscribe(this.performFilter(this.searchCourse.getSearchText()));
    // this.searchCourse.searched.subscribe((course: string)=>{this.filteredCourse=course});
    // this.filteredCourses = this.performFilter(this.filteredCourse);
    this.searchCourse.searched.subscribe((course: string)=>{this.filteredCourses=this.performFilter(course)});
  }

  mover():void{
    console.log("Mouse In");
  }

  mout():void{
    console.log("Mouse Out");
  }

  // searchClicked():void{
  //   console.log("In Filter")
  //   this.filteredCourses = this.performFilter(crs);
  // }

  performFilter(filterBy:string):ICourse[]{
    console.log("In Filter : "+ filterBy)
    filterBy = filterBy.toLocaleLowerCase();
    return this.courses.filter((course : ICourse)=>
    course.courseName.toLocaleLowerCase().includes(filterBy)||
    course.domain.toLocaleLowerCase().includes(filterBy));
  }

  // onClick(): void{
  //   console.log("Course : "+this.course_searchText);
  // }
}
