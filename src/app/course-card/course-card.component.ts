import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/Models/CourseModel';

import {CourseService} from '../../Services/Course/course.service'


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  constructor() { }
  @Input() Course;
//   c:Course[];
//   // @Input() Course:Object;
//   btnClick= function () {
//     this.router.navigateByUrl('/course/details');
//   };
//   // courselist:Object=[];
  ngOnInit(): void {
// this.getAllCourses();

// console.log("in oninit",this.c);

  }

//   getAllCourses(){
//     this.courses.getCourses().subscribe(
//       res=>{
//         console.log(res)
//         this.c=res;   
//       }
//       )
//       console.log("here");

//       console.log(this.c);
//   }
//   imgsrc:any="../assets/images/bg_1.jpg";



  
 




}
