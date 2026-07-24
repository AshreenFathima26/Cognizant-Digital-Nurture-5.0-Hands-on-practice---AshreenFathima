import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnChanges {

  @Input() course!: {
    id: number;
    name: string;
    code: string;
    credits: number;
  };

  @Output() enrollRequested = new EventEmitter<number>();

  constructor(private enrollmentService: EnrollmentService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course changed');
    console.log(changes);
  }

  enroll() {

    if (this.enrollmentService.isEnrolled(this.course.id)) {

      this.enrollmentService.unenroll(this.course.id);

    } else {

      this.enrollmentService.enroll(this.course.id);

    }

    this.enrollRequested.emit(this.course.id);

  }

  isEnrolled(): boolean {

    return this.enrollmentService.isEnrolled(this.course.id);

  }

}