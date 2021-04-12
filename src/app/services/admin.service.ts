import { Ad } from './../models/Ad';
import { Statistiques } from '../models/Statistiques';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  url: string = "http://localhost:8080/api"

  constructor(private http: HttpClient) { }

  statistiques(): Observable<Statistiques | ArrayBuffer> {
    return this.http.get<Statistiques>(`${this.url}/counts`, {
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
        'X-Auth-Token': localStorage.getItem('token')
      }
    });
  }

  index(): Observable<Ad[] | any> {
    return this.http.get<Ad[]>(`${this.url}/ads`, {
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
        'X-Auth-Token': localStorage.getItem('token')
      }
    });
  }

}
