import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CourseSummaryWidgetComponent } from '../../components/course-summary-widget/course-summary-widget.component';
import { NotificationComponent } from '../../components/notification/notification.component';

// HO6
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    CourseSummaryWidgetComponent,
    NotificationComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  // Interpolation
  portalName = 'Student Course Portal';

  // Property Binding
  isPortalActive = true;

  // Event Binding
  message = '';

  // Two-way Binding
  searchTerm = '';

  // Image
  bannerImage = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900';

  availableCourses = 0;

  // HO6
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {

    // HO6
    this.availableCourses = this.courseService.getCourses().length;

    console.log('HomeComponent initialised — courses loaded');

  }

  onEnrollClick(): void {

    this.message = 'Enrollment opened!';

  }

  ngOnDestroy(): void {

    console.log('HomeComponent destroyed');

  }

}