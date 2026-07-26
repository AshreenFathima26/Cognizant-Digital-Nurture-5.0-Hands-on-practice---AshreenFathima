import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';

import { CourseCardComponent } from './course-card.component';
import { EnrollmentService } from '../../services/enrollment.service';

describe('CourseCardComponent', () => {

  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  const enrollmentServiceMock = {
    enroll: jasmine.createSpy('enroll'),
    unenroll: jasmine.createSpy('unenroll'),
    isEnrolled: jasmine.createSpy('isEnrolled').and.returnValue(false)
  };

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [CourseCardComponent],
      providers: [
        {
          provide: EnrollmentService,
          useValue: enrollmentServiceMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  it('should render course name', () => {

    component.course = {
      id: 1,
      name: 'Data Structures',
      code: 'CS101',
      credits: 4
    };

    fixture.detectChanges();

    const title = fixture.debugElement.query(By.css('h2')).nativeElement;

    expect(title.textContent).toContain('Data Structures');

  });

  it('should emit enrollRequested when button is clicked', () => {

    component.course = {
      id: 1,
      name: 'Data Structures',
      code: 'CS101',
      credits: 4
    };

    fixture.detectChanges();

    spyOn(component.enrollRequested, 'emit');

    fixture.debugElement.query(By.css('button')).nativeElement.click();

    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);

  });

  it('should call ngOnChanges', () => {

    spyOn(console, 'log');

    component.ngOnChanges({
      course: new SimpleChange(
        null,
        {
          id: 1,
          name: 'Angular',
          code: 'ANG101',
          credits: 4
        },
        true
      )
    });

    expect(console.log).toHaveBeenCalled();

  });

});