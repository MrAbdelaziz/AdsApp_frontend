import { Thumbnail } from './../models/Thumbnail';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

const requestOptions: Object = {
  headers: new HttpHeaders().append('X-Auth-Token', localStorage.getItem('token')),
  'Accept': "application/json",
  'Content-Type': "application/json",
}

@Injectable({
  providedIn: 'root'
})

export class ThumbnailService {

  url: string = "http://localhost:8080/api"

  constructor(private http: HttpClient) { }

  index(id: string | null): Observable<Thumbnail[] | any> {
    return this.http.get<Thumbnail[]>(`${this.url}/ad/${id}/thumbnails`, requestOptions);
  }

  store(thumbnail: Thumbnail | any): Observable<Thumbnail | any> {
    return this.http.post<Thumbnail>(`${this.url}/thumbnails`, thumbnail, {
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
        'X-Auth-Token': localStorage.getItem('token')
      }
    });
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/thumbnails/${id}`, {
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
        'X-Auth-Token': localStorage.getItem('token')
      }
    });
  }

}
