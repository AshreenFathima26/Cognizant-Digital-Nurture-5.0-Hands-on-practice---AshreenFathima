import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { CourseStatusPipe } from '../../pipes/course-status.pipe';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { Router, ActivatedRoute } from '@angular/router';


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
  private enrollmentService: EnrollmentService,
  private router: Router,
  private route: ActivatedRoute
) { }

 ngOnInit(): void {

  this.courses = this.courseService.getCourses().map(course => ({

    ...course,

    enrolled: false

  }));

  const search = this.route.snapshot.queryParamMap.get('search');

  if (search) {
    this.searchText = search;
  }

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
viewCourse(courseId: number): void {

  this.router.navigate(['/courses', courseId]);

}

updateSearch(): void {

  this.router.navigate(
    [],
    {
      relativeTo: this.route,
      queryParams: {
        search: this.searchText || null
      },
      queryParamsHandling: ''
    }
  );

}
}
