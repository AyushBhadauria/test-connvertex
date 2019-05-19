import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Endpoints } from '../core/endpoints';
import { Observable } from 'rxjs/Observable';
import { Data } from '../models/data';

@Injectable()
export class FetchService {
  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(Endpoints.fetchData);
  }
  post(data: Array<Data>): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.post(Endpoints.saveData, {body: data}, {headers: headers});
  }
}
