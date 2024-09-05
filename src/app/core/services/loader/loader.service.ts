/**
 * loaded service
 *
 * show or hide loader while data is loading
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private isLoading = new BehaviorSubject(false);
  public isLoading$ = this.isLoading.asObservable();

  constructor() {}

  /**
   * Show and hide loader
   * @ param value
   */
  isShow(value: boolean) {
    this.isLoading.next(value);
  }
}
