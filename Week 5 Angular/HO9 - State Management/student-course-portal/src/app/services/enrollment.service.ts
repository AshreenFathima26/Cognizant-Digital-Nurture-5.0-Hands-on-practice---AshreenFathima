import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { CourseService } from './course.service';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private enrolledCourseIds: number[] = [];

  // HO8 API
  private studentsApi = 'http://localhost:3000/students';

  constructor(
    private courseService: CourseService,
    private http: HttpClient
  ) { }

  // ==========================
  // HO6 METHODS (UNCHANGED)
  // ==========================

  enroll(courseId: number): void {

    if (!this.enrolledCourseIds.includes(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }

  }

  unenroll(courseId: number): void {

    this.enrolledCourseIds =
      this.enrolledCourseIds.filter(id => id !== courseId);

  }

  isEnrolled(courseId: number): boolean {

    return this.enrolledCourseIds.includes(courseId);

  }

  getEnrolledCourses(): Course[] {

    return this.enrolledCourseIds
      .map(id => this.courseService.getCourseById(id))
      .filter((course): course is Course => course !== undefined);

  }

  // ==========================
  // HO8 TASK 2
  // Step 87 - switchMap support
  // ==========================

  getStudentsByCourse(courseId: number): Observable<any[]> {

    return this.http.get<any[]>(this.studentsApi);

  }

}