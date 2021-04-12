import { HttpClient } from '@angular/common/http';
import { Ad } from './../models/Ad';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AdsService {

  url: string = "http://localhost:8080/api"

  constructor(private http: HttpClient) { }

  index(): Observable<Ad[] | any> {
    return this.http.get<Ad[]>(`${this.url}/user/ads`, {
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
        'X-Auth-Token': localStorage.getItem('token')
      }
    });
  }

  show(id: string | any): Observable<Ad | any> {
    return this.http.get<Ad>(`${this.url}/ads/${id}`, {
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
        'X-Auth-Token': localStorage.getItem('token')
      }
    });
  }

  store(ad: Ad): Observable<Ad | any> {
    return this.http.post<Ad>(`${this.url}/ads`, ad, {
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
        'X-Auth-Token': localStorage.getItem('token')
      }
    });
  }

  update(id: number, status: boolean): Observable<Ad | ArrayBuffer> {
    return this.http.patch<Ad>(`${this.url}/ads/${id}`, {
      status
    }, {
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
        'X-Auth-Token': localStorage.getItem('token')
      }
    });
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/ads/${id}`, {
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
        'X-Auth-Token': localStorage.getItem('token')
      }
    });
  }

}
