import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable()
export class ContactService {

  constructor(
    private http: HttpClient
  ) {}

  private mailUrl = `${environment.server}/admin-ajax.php`;
  private pageUrl = `${environment.resource}/contacts`;

  /** POST message to wp mailer */
  sendMail(data) {
    return this.http.post(this.mailUrl,data);
  }

  /** GET contacts page content */
  getContent() {
    return this.http.get(this.pageUrl);
  }

}
