import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './enrollment-form.component.html',
  styleUrl: './enrollment-form.component.css'
})
export class EnrollmentFormComponent {

  student = {
    studentName: '',
    studentEmail: '',
    courseId: null as number | null,
    preferredSemester: '',
    agreeToTerms: false
  };

  submitted = false;

  constructor(private courseService: CourseService) { }

  onSubmit(form: NgForm) {

    console.log('Form Value:', form.value);
    console.log('Form Valid:', form.valid);

    if (form.valid) {

      this.courseService.createCourse({

        name: this.student.studentName,
        code: 'NEW101',
        credits: 3,
        gradeStatus: 'pending'

      }).subscribe({

        next: (response) => {

          console.log('Course Created:', response);

          alert('Course Added Successfully');

          this.submitted = true;

        },

        error: (err) => {

          console.error(err);

          alert('Failed to Add Course');

        }

      });

    }

  }

}