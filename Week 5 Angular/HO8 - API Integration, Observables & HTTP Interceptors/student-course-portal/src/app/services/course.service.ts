import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../models/course.model';

import { Observable, throwError } from 'rxjs';
import { map, tap, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  // HO6 - Existing Hardcoded Data
  private courses: Course[] = [

    {
      id: 1,
      name: 'Angular Development',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed'
    },

    {
      id: 2,
      name: 'Java Programming',
      code: 'JAVA201',
      credits: 4,
      gradeStatus: 'pending'
    },

    {
      id: 3,
      name: 'Spring Boot',
      code: 'SPR301',
      credits: 3,
      gradeStatus: 'passed'
    },

    {
      id: 4,
      name: 'Database Management Systems',
      code: 'DBMS401',
      credits: 4,
      gradeStatus: 'failed'
    },

    {
      id: 5,
      name: 'Web Development',
      code: 'WEB501',
      credits: 3,
      gradeStatus: 'pending'
    }

  ];

  // HO8 API URL
  private apiUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) { }

  // ===========================
  // HO6 METHODS (UNCHANGED)
  // ===========================

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }

  // ===========================
  // HO8 METHODS (NEW)
  // ===========================

  getCoursesFromApi(): Observable<Course[]> {

    return this.http.get<Course[]>(this.apiUrl).pipe(

      map(courses => courses.filter(course => course.credits > 0)),

      tap(courses =>
        console.log('Courses loaded:', courses.length)
      ),

      retry(2),

      catchError(error => {

        console.error(error);

        return throwError(() =>
          new Error('Failed to load courses. Please try again.')
        );

      })

    );

  }

  getCourseByIdFromApi(id: number): Observable<Course> {

    return this.http.get<Course>(`${this.apiUrl}/${id}`);

  }

  createCourse(course: Omit<Course, 'id'>): Observable<Course> {

    return this.http.post<Course>(this.apiUrl, course);

  }

  updateCourse(course: Course): Observable<Course> {

    return this.http.put<Course>(
      `${this.apiUrl}/${course.id}`,
      course
    );

  }

  deleteCourse(id: number): Observable<void> {

    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    );

  }

}