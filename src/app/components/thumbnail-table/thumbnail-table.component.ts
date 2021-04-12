import { ThumbnailService } from 'src/app/services/thumbnails.service';
import { Thumbnail } from './../../models/Thumbnail';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-thumbnail-table',
  templateUrl: './thumbnail-table.component.html',
  styleUrls: ['./thumbnail-table.component.css']
})
export class ThumbnailTableComponent implements OnInit {

  @Input() thumbnails!: Thumbnail[]
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  loading: Boolean = false

  constructor(private thumbnailService: ThumbnailService) { }

  ngOnInit(): void {
  }

  delete(id: number) {
    this.loading = true
    setTimeout(() => {
      this.thumbnailService.delete(id).subscribe(res => {
        this.onDelete.emit()
        this.loading = false
      })
    }, 2000);
  }

  onLoading() {
    return this.loading ? "loading" : ""
  }

}
