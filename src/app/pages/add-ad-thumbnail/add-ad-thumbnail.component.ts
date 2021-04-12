import { ThumbnailService } from 'src/app/services/thumbnails.service';
import { Thumbnail } from './../../models/Thumbnail';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-ad-thumbnail',
  templateUrl: './add-ad-thumbnail.component.html',
  styleUrls: ['./add-ad-thumbnail.component.css']
})

export class AddAdThumbnailPage implements OnInit {

  thumbnails!: Thumbnail[]

  constructor(private thumbnailService: ThumbnailService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id: string | null = this.router.snapshot.paramMap.get('id')
    this.thumbnailService.index(id).subscribe(res => this.thumbnails = res)
  }

  onAddThumbnail() {
    const id: string | null = this.router.snapshot.paramMap.get('id')
    this.thumbnailService.index(id).subscribe(res => this.thumbnails = res)
  }

  onDelete() {
    const id: string | null = this.router.snapshot.paramMap.get('id')
    this.thumbnailService.index(id).subscribe(res => this.thumbnails = res)
  }

}
