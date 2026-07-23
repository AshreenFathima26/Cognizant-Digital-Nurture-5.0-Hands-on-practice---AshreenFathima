import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseCardComponent } from '../../components/course-card/course-card.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CourseCardComponent
  ],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {

  searchText = '';

  selectedCourseId = 0;

  courses = [

    {
      id:101,
      name:'Angular',
      code:'ANG101',
      credits:4
    },

    {
      id:102,
      name:'Java',
      code:'JAVA102',
      credits:4
    },

    {
      id:103,
      name:'Spring Boot',
      code:'SPR103',
      credits:3
    },

    {
      id:104,
      name:'SQL',
      code:'SQL104',
      credits:3
    },

    {
      id:105,
      name:'Microservices',
      code:'MIC105',
      credits:4
    }

  ];

  get filteredCourses() {

    return this.courses.filter(course =>

      course.name.toLowerCase().includes(this.searchText.toLowerCase())

    );

  }

  onEnroll(id:number){

    this.selectedCourseId=id;

    alert("Successfully Enrolled in Course ID : " + id);

  }

}
