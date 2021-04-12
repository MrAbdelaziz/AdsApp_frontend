import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goAds() {
    this.router.navigate(['/admin/ads'])
  }

  goAdminHome() {
    this.router.navigate(['admin'])

  }

}
