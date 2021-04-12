import { HttpClient } from '@angular/common/http';
import { Ad } from './../models/Ad';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  url: string = "http://localhost:8080/api"

  constructor(private http: HttpClient) { }

  index(): Observable<Ad[] | ArrayBuffer> {
    return this.http.get<Ad[]>(`${this.url}/homeAds`, {
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
        'X-Auth-Token': localStorage.getItem('token')
      }
    });
  }

}
