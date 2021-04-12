import { AdsService } from './../../services/ads.service';
import { Router } from '@angular/router';
import { Ad } from './../../models/Ad';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ads-table',
  templateUrl: './ads-table.component.html',
  styleUrls: ['./ads-table.component.css']
})

export class AdsTableComponent {
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  @Input() ads!: Ad[]
  @Input() loading!: Boolean

  constructor(private router: Router, private adService: AdsService) { }

  goThumbnails(id: number) {
    this.router.navigate([`admin/ads/${id}/thumbnails`])
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

  onLoading() {
    return this.loading ? "loading" : ""
  }

}
