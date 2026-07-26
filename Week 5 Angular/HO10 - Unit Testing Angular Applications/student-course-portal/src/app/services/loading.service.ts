import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  // HO8 Loading State
  private loadingSubject = new BehaviorSubject<boolean>(false);

  isLoading$ = this.loadingSubject.asObservable();

  constructor() { }

  // Show Loading Spinner
  show(): void {

    this.loadingSubject.next(true);

  }

  // Hide Loading Spinner
  hide(): void {

    this.loadingSubject.next(false);

  }

}
