import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { CourseStatusPipe } from '../../pipes/course-status.pipe';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as CourseActions from '../../store/course/course.actions';
import * as EnrollmentActions from '../../store/enrollment/enrollment.actions';

import {
  selectAllCourses,
  selectCoursesLoading,
  selectCoursesError
} from '../../store/course/course.selectors';


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
  // HO8
selectedStudents: any[] = [];

// HO8
private selectedCourse = new Subject<number>();



  constructor(
  private store: Store,
  private courseService: CourseService,
  private enrollmentService: EnrollmentService,
  private router: Router,
  private route: ActivatedRoute
) { }

 ngOnInit(): void {

 this.courseService.getCoursesFromApi().subscribe({

  next: (courses) => {

    this.courses = courses.map(course => ({

      ...course,

      enrolled: false

    }));

  },

  error: (err) => {

    console.error(err);

  },

  complete: () => {

    console.log('Courses Loaded Successfully');

  }

});
  const search = this.route.snapshot.queryParamMap.get('search');

  if (search) {
    this.searchText = search;
  }
  // HO8 Step 87
// switchMap cancels the previous HTTP request if another course is selected.
this.selectedCourse.pipe(

  switchMap(courseId =>
    this.enrollmentService.getStudentsByCourse(courseId)
  )

).subscribe({

  next: (students) => {

    this.selectedStudents = students;

    console.log('Students Loaded', students);

  },

  error: (err) => {

    console.error(err);

  }

});

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

this.store.dispatch(
  EnrollmentActions.unenrollFromCourse({
    courseId: course.id
  })
);

course.enrolled = false;

    alert("Course Unenrolled : " + course.name);

  } else {

    this.enrollmentService.enroll(course.id);

this.store.dispatch(
  EnrollmentActions.enrollInCourse({
    courseId: course.id
  })
);

course.enrolled = true;

    alert("Successfully Enrolled in Course : " + course.name);

  }

  this.selectedCourseId = course.id;

}
viewCourse(courseId: number): void {

  // HO8
  this.selectedCourse.next(courseId);

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
// ===========================
// HO8 - Update Course
// ===========================
updateCourse(course: any): void {

  const updatedCourse = {

    ...course,

    name: course.name + ' (Updated)'

  };

  this.courseService.updateCourse(updatedCourse).subscribe({

    next: (response) => {

      console.log('Course Updated:', response);

      alert('Course Updated Successfully');

    },

    error: (err) => {

      console.error(err);

      alert('Failed to Update Course');

    }

  });

}

// ===========================
// HO8 - Delete Course
// ===========================
deleteCourse(id: number): void {

  if (confirm('Are you sure you want to delete this course?')) {

    this.courseService.deleteCourse(id).subscribe({

      next: () => {

        this.courses = this.courses.filter(course => course.id !== id);

        alert('Course Deleted Successfully');

      },

      error: (err) => {

        console.error(err);

        alert('Failed to Delete Course');

      }

    });

  }

}
}
