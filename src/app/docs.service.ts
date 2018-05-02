import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class DocsService {

  constructor(
    private http: HttpClient
  ) {}

  private propertyUrl = `${environment.resource}/document`;

  /** GET documents */
  getDocuments(){
    return this.http.get(this.propertyUrl);
  }

}
