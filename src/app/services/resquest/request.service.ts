import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod, RequestOptions } from '@angular/http';
import { Headers } from '@angular/http/src/headers';

@Injectable()
export class RequestService {
  constructor(public http: Http) {}

  public post(url: string, body: any) {
    const headers = new Headers();

    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(url, body, { headers });
  }
}
