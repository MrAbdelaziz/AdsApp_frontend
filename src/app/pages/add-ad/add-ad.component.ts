import { AdsService } from './../../services/ads.service';
import { Ad } from './../../models/Ad';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-ad',
  templateUrl: './add-ad.component.html',
  styleUrls: ['./add-ad.component.css']
})
export class AddAdPage implements OnInit {

  ads: Ad[] = []
  loading: Boolean = false

  constructor(private adsService: AdsService) { }

  ngOnInit(): void {
    this.loading = true
    setTimeout(() => {
      this.adsService.index().subscribe(res => {
        this.ads = res
        this.loading = false
      })
    }, 2000);
  }

  onAdd() {
    this.loading = true
    setTimeout(() => {
      this.adsService.index().subscribe(res => {
        this.ads = res
        this.loading = false
      })
    }, 2000);
  }

  onDelete() {
    this.loading = true
    setTimeout(() => {
      this.adsService.index().subscribe(res => {
        this.ads = res
        this.loading = false
      })
    }, 2000);
  }

  onLoading() {
    return this.loading ? "loading" : ""
  }

}
