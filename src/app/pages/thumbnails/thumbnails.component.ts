import { Thumbnail } from './../../models/Thumbnail';
import { Component, OnInit } from '@angular/core';
import { ThumbnailService } from 'src/app/services/thumbnails.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.css']
})
export class ThumbnailsPage implements OnInit {

  thumbnails!: Thumbnail[]

  constructor(private thumbnailService: ThumbnailService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id: string = this.router.snapshot.paramMap.get('id')
    this.thumbnailService.index(id).subscribe(res => this.thumbnails = res)
  }

  onAddThumbnail() {
    const id: string = this.router.snapshot.paramMap.get('id')
    this.thumbnailService.index(id).subscribe(res => this.thumbnails = res)
  }

  onDelete() {
    const id: string = this.router.snapshot.paramMap.get('id')
    this.thumbnailService.index(id).subscribe(res => this.thumbnails = res)
  }

}
