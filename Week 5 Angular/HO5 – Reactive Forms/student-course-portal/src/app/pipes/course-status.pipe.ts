import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseStatus',
  standalone: true
})
export class CourseStatusPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? '🟢 Enrolled' : '🔴 Not Enrolled';
  }

}
