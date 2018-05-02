import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class CompanyService {

  constructor(
    private http: HttpClient
  ) {}

  private companyUrl = `${environment.resource}/company`;

  /** GET companies from the server */
  getCompanies() {
    return this.http.get(this.companyUrl);
  }

}
