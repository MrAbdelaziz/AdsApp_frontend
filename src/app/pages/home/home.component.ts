import { Router } from '@angular/router';
import { Ad } from './../../models/Ad';
import { HomeService } from './../../services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomePage implements OnInit {

  ads: Ad[] | ArrayBuffer = []
  loading: boolean = false

  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit(): void {
    this.loading = true
    setTimeout(() => {
      this.homeService.index().subscribe(res => {
        this.ads = res
        this.loading = false
      })
    }, 2000);

  }

  goAdd() {
    this.router.navigate(['ads/add'])
  }

}
