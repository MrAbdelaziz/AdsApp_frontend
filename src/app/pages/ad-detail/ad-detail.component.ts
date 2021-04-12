import { Ad } from './../../models/Ad';
import { AdsService } from './../../services/ads.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ad-detail',
  templateUrl: './ad-detail.component.html',
  styleUrls: ['./ad-detail.component.css']
})
export class AdDetailPage implements OnInit {

  ad!: Ad

  constructor(private adService: AdsService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id: string | any = this.router.snapshot.paramMap.get('id')
    this.adService.show(id).subscribe(res => this.ad = res)
  }

}
