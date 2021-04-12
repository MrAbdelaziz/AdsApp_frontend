import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  @Output() onError: EventEmitter<any> = new EventEmitter();

  loading: boolean = false
  user: {
    username: string
    password: string
  } = {
      username: "",
      password: ""
    }

  constructor(private authService: AuthService, private route: Router) { }

  onSubmit() {
    this.loading = true
    setTimeout(() => {
      this.authService.login(this.user).subscribe(
        (data) => {
          this.authService.setUser(data)
          this.route.navigate(['ads'])
        },
        (error) => {
          error ? this.onError.emit() : null
        })
      this.loading = false
    }, 3000);
  }

  onLoading() {
    return this.loading ? 'loading' : ''
  }

}
