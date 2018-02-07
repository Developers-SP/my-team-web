import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { JsonToForm, JsonToUrl } from '../helpers/resquet';
import { environment } from '../../environments/environment';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class RequestService {
  private options = new RequestOptions();

  constructor(public http: Http) {
    this.options.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  }

  public post(url: string, params: object): Observable<any> {
    return this.http.post(`${environment.api}${url}`, JsonToUrl(params), this.options);
  }
}
