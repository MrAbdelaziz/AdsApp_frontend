import { Ad } from './../../models/Ad';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsPage implements OnInit {

  ads: Ad[] = []
  loading: Boolean = false

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.loading = true
    setTimeout(() => {
      this.adminService.index().subscribe(res => {
        this.ads = res
        this.loading = false
      })
    }, 2000);
  }

  onUpdate() {
    this.loading = true
    setTimeout(() => {
      this.adminService.index().subscribe(res => {
        this.ads = res
        this.loading = false
      })

    }, 2000);

  }

  onDelete() {
    this.loading = true
    setTimeout(() => {
      this.adminService.index().subscribe(res => {
        this.ads = res
        this.loading = false
      })
    }, 2000);
  }

}
