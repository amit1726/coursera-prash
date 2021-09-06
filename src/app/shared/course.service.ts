import { Injectable } from '@angular/core';
import { ICourse } from '../course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  
  private courses: ICourse[]=[
    {
      "courseId": 1,
      "courseName": "Oracle",
      "domain": "DB",
      "duration": 40,
      "seatsAvl": 1,
      "fees": 1000,
    },
    {
      "courseId": 2,
      "courseName": "Python",
      "domain": "Programming",
      "duration": 50,
      "seatsAvl": 15,
      "fees": 2000,
    },
    {
      "courseId": 3,
      "courseName": "Angular",
      "domain": "WEB",
      "duration": 30,
      "seatsAvl": 20,
      "fees": 3000,
    },
    {
      "courseId": 4,
      "courseName": "C",
      "domain": "Programming",
      "duration": 50,
      "seatsAvl": 3,
      "fees": 2000,
    },
    {
      "courseId": 5,
      "courseName": "ReactJS",
      "domain": "WEB",
      "duration": 50,
      "seatsAvl": 15,
      "fees": 2000,
    },
    {
      "courseId": 6,
      "courseName": "Hadoop",
      "domain": "Big Data",
      "duration": 50,
      "seatsAvl": 10,
      "fees": 3000,
    }
  ]

  getCourses(): ICourse[] {
    return this.courses.slice();
  }
}
