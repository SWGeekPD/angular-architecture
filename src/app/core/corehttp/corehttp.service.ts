/**
 * core http service
 * contains wrapper methods for api calls and method to add timestamp to API
 */
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../.././../environments/environment';
import { LoaderService } from '../services/loader/loader.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CorehttpService {
  constructor(
    private http: HttpClient,
    @Inject(LoaderService) private loaderService: LoaderService
  ) {}

  postApi<T>(url: string, data: unknown, local?: boolean, isShowLoader?: boolean): Observable<T> {
    if (isShowLoader) {
      this.loaderService.isShow(true);
    }
    if (local) {
      // url = 'assets/json/' + url + '.json';
      return this.http.get<T>(url);
    } else {
      return this.http.post<T>(environment.apiUrl + url + this.getTimestamp(), data);
    }
  }

  putApi<T>(url: string, data: unknown, local?: boolean, isShowLoader?: boolean): Observable<T> {
    if (isShowLoader) {
      this.loaderService.isShow(true);
    }
    if (local) {
      // url = 'assets/json/' + url + '.json';
      return this.http.get<T>(url);
    } else {
      return this.http.put<T>(environment.apiUrl + url + this.getTimestamp(), data);
    }
  }

  getApi<T>(url: string, local?: boolean, isShowLoader?: boolean): Observable<T> {
    if (isShowLoader) {
      this.loaderService.isShow(true);
    }
    if (local) {
      return this.http.get<T>(url);
    } else {
      return this.http.get<T>(environment.apiUrl + url + this.getTimestamp());
    }
  }

  getTimestamp() {
    return '?ngsw-bypass=true&_=' + new Date().getTime();
  }
}
