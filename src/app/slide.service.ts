import { Injectable } from '@angular/core';
import { Slide } from './slide';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class SlideService {

  constructor(
    private http: HttpClient
  ) {}

  private slideUrl = `${environment.resource}/slide`;

  /** GET objects from the server */
  getSlides(): Observable<Slide[]> {
    return this.http.get<Slide[]>(this.slideUrl);
  }

}
