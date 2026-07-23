import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { CourseStatusPipe } from '../../pipes/course-status.pipe';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CourseCardComponent,
    CourseStatusPipe
  ],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {

  today = new Date();

  // HO2
  searchText = '';

  // HO2
  selectedCourseId = 0;

  // HO3
  showCourses = true;

  

  courses = [

    {
      id:101,
      name:'Angular',
      code:'ANG101',
      credits:4,
      enrolled:false
    },

    {
      id:102,
      name:'Java',
      code:'JAVA102',
      credits:4,
      enrolled:false
    },

    {
      id:103,
      name:'Spring Boot',
      code:'SPR103',
      credits:3,
      enrolled:false
    },

    {
      id:104,
      name:'SQL',
      code:'SQL104',
      credits:3,
      enrolled:false
    },

    {
      id:105,
      name:'Microservices',
      code:'MIC105',
      credits:4,
      enrolled:false
    }

  ];

  // HO2 Search
  get filteredCourses(){

    return this.courses.filter(course =>

      course.name.toLowerCase().includes(this.searchText.toLowerCase())

    );

  }

  // HO2 + HO3
  onEnroll(course:any){

    course.enrolled=true;

    this.selectedCourseId=course.id;

    alert("Successfully Enrolled in Course : " + course.name);

  }

}
