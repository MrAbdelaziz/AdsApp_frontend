import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from './../models/User';
import { HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: {
    'Accept': "application/json",
    'Content-Type': "application/json",
  }
}

interface loginReponce {
  username: string
  roles: [string]
  access_token: string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  authUser: {
    username: string,
    role: string
  } = {
      username: "",
      role: ""
    }

  endPoint: string = "http://localhost:8080/api"

  constructor(private http: HttpClient, private router: Router) { }

  setUser(user: loginReponce) {
    localStorage.setItem('username', user.username)
    localStorage.setItem('role', user.roles[0])
    localStorage.setItem('token', user.access_token)
  }

  login(user: User): Observable<loginReponce> {
    return this.http.post<loginReponce>(`${this.endPoint}/login`, user, httpOptions)
  }

  adminPath(): boolean {
    if (localStorage.getItem('role') !== "ROLE_ADMIN") {
      this.router.navigate(['ads']);
      return false;
    }
    return true;
  }

}
