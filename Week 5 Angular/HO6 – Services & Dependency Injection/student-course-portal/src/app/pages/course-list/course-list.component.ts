import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { CourseStatusPipe } from '../../pipes/course-status.pipe';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';

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
export class CourseListComponent implements OnInit {

  today = new Date();

  // HO2
  searchText = '';

  // HO2
  selectedCourseId = 0;

  // HO3
  showCourses = true;

  // HO6
  courses: any[] = [];

  constructor(
  private courseService: CourseService,
  private enrollmentService: EnrollmentService
) { }

  ngOnInit(): void {

    this.courses = this.courseService.getCourses().map(course => ({

      ...course,

      enrolled: false

    }));

  }

  // HO2 Search
  get filteredCourses() {

    return this.courses.filter(course =>

      course.name.toLowerCase().includes(this.searchText.toLowerCase())

    );

  }

  // HO2 + HO3
  onEnroll(course: any) {

  if (this.enrollmentService.isEnrolled(course.id)) {

    this.enrollmentService.unenroll(course.id);
    course.enrolled = false;

    alert("Course Unenrolled : " + course.name);

  } else {

    this.enrollmentService.enroll(course.id);
    course.enrolled = true;

    alert("Successfully Enrolled in Course : " + course.name);

  }

  this.selectedCourseId = course.id;

}
}
