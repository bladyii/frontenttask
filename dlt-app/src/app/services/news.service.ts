import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiUrl = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getNewsShort(): Observable<any>{
    const API_URL = `${this.apiUrl}/cards`;
    return this.http.get(API_URL, {responseType: 'json'});
  }

  getNewsById(id: number): Observable<any>{
    const API_URL = `${this.apiUrl}/articles`;
    const params = new HttpParams().set('id', id.toString());
    return this.http.get(API_URL, {responseType: 'json', params} );
  }

  postComment(form: any): Observable<any> {
    const API_URL = `${this.apiUrl}/articles`;
    return this.http.post(API_URL, form, {responseType: 'json'} );
  }
}
