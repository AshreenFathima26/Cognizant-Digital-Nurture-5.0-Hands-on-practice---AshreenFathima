import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

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

  constructor() { }

  // Return all courses
  getCourses(): Course[] {
    return this.courses;
  }

  // Return a course by ID
  getCourseById(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }

  // Add a new course
  addCourse(course: Course): void {
    this.courses.push(course);
  }

}