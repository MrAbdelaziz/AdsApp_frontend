import { User } from './../../models/User';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: {
    username: string | any
    role: string | any
  } = {
      username: localStorage.getItem('username'),
      role: localStorage.getItem('role'),
    }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goLogin() {
    this.router.navigate(['login'])
  }

  goHome() {
    this.router.navigate(['ads'])
  }

  goAdmin() {
    this.router.navigate(['admin'])
  }

  goLogout() {
    localStorage.clear()
    this.router.navigate(['login'])
  }

}
