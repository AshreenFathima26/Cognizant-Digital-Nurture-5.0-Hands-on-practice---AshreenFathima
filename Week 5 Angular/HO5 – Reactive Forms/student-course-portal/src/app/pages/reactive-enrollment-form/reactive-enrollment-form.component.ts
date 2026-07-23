import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
  AbstractControl,
  ValidationErrors,
  AsyncValidatorFn
} from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './reactive-enrollment-form.component.html',
  styleUrl: './reactive-enrollment-form.component.css'
})
export class ReactiveEnrollmentFormComponent implements OnInit {

  enrollForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.enrollForm = this.fb.group({

      studentName: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      studentEmail: this.fb.control(
        '',
        [
          Validators.required,
          Validators.email
        ],
        [
          this.simulateEmailCheck()
        ]
      ),

      courseId: [
        '',
        [
          Validators.required,
          this.noCourseCode
        ]
      ],

      preferredSemester: [
        'Odd',
        Validators.required
      ],

      agreeToTerms: [
        false,
        Validators.requiredTrue
      ],

      additionalCourses: this.fb.array([])

    });

  }

  // PDF Step 57
  get additionalCourses(): FormArray<FormControl> {
    return this.enrollForm.get('additionalCourses') as FormArray<FormControl>;
  }

  // Helper method for Angular 20 typed forms
  getCourseControl(index: number): FormControl {
    return this.additionalCourses.at(index) as FormControl;
  }

  addCourse() {

    this.additionalCourses.push(
      this.fb.control('', Validators.required)
    );

  }

  removeCourse(index: number) {

    this.additionalCourses.removeAt(index);

  }

  // PDF Step 53
  noCourseCode(control: AbstractControl): ValidationErrors | null {

    const value = control.value;

    if (value && value.toString().startsWith('XX')) {

      return { noCourseCode: true };

    }

    return null;

  }

  // PDF Step 55
  simulateEmailCheck(): AsyncValidatorFn {

    return (control: AbstractControl) => {

      return new Promise<ValidationErrors | null>((resolve) => {

        setTimeout(() => {

          if (control.value?.includes('test@')) {

            resolve({ emailTaken: true });

          } else {

            resolve(null);

          }

        }, 800);

      });

    };

  }

  onSubmit() {

    if (this.enrollForm.invalid) {
      this.enrollForm.markAllAsTouched();
      return;
    }

    this.submitted = true;

    console.log('Form Value:', this.enrollForm.value);

    // value excludes disabled controls

    console.log('Form Raw Value:', this.enrollForm.getRawValue());

    // getRawValue() includes disabled controls

    alert('Enrollment Submitted Successfully!');

  }

}