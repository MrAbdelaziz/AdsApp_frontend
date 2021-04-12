import { AdsService } from './../../services/ads.service';
import { Router } from '@angular/router';
import { Ad } from './../../models/Ad';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-ad-table',
  templateUrl: './home-ad-table.component.html',
  styleUrls: ['./home-ad-table.component.css']
})

export class HomeAdTableComponent {

  @Output() onUpdate: EventEmitter<any> = new EventEmitter();
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  @Input() ads!: Ad[]

  constructor(private router: Router, private adService: AdsService) { }

  goThumbnails(id: number) {
    this.router.navigate([`/ads/${id}/thubnails`])
  }

  edit(id: number, status: boolean) {
    if (status == true) {
      this.adService.update(id, false).subscribe(res => this.onUpdate.emit())
    } else {
      this.adService.update(id, true).subscribe(res => this.onUpdate.emit())
    }
  }

  deleteAd(id: number) {
    this.adService.delete(id).subscribe(res => this.onDelete.emit())
  }


}
