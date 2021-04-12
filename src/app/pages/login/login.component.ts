import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginPage implements OnInit {

  message: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  onError() {
    this.message = "Username or Paswword are incorrect!!!!"
  }

}
