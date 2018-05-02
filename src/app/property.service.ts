import { Injectable } from '@angular/core';
import { Property } from './property';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class PropertyService {

  constructor(
    private http: HttpClient,
  ) {}

  private propertyUrl = `${environment.resource}/object`;

  /** GET objects from the server */
  getProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.propertyUrl);
  }

  /** GET object by id. */
  getProperty(id: number): Observable<Property> {
    const url = `${this.propertyUrl}/${id}`;
    return this.http.get<Property>(url);
  }

}
