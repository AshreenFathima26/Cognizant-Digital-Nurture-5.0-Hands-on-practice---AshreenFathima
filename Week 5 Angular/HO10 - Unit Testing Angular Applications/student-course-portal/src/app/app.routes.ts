import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { EnrollmentFormComponent } from './pages/enrollment-form/enrollment-form.component';
import { ReactiveEnrollmentFormComponent } from './pages/reactive-enrollment-form/reactive-enrollment-form.component';

// HO7
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { CoursesLayoutComponent } from './pages/courses-layout/courses-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';
import { unsavedChangesGuard } from './guards/unsaved-changes.guard';

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  // HO7 Nested Routing
  {
    path: 'courses',
    component: CoursesLayoutComponent,
    children: [

      {
        path: '',
        component: CourseListComponent
      },

      {
        path: ':id',
        component: CourseDetailComponent
      }

    ]
  },

  // Keep HO6 routes unchanged
  {
  path:'enroll',
  canActivate:[authGuard],
  component: EnrollmentFormComponent
},

 {
  path: 'enroll-reactive',
  canActivate: [authGuard],
  canDeactivate: [unsavedChangesGuard],
  component: ReactiveEnrollmentFormComponent
},

 {
  path: 'profile',
  canActivate: [authGuard],
  component: StudentProfileComponent
},

  // HO7 404
  {
    path: '**',
    component: NotFoundComponent
  }

];