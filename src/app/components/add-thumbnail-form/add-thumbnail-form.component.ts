import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThumbnailService } from 'src/app/services/thumbnails.service';
import { Thumbnail } from './../../models/Thumbnail';

@Component({
  selector: 'app-add-thumbnail-form',
  templateUrl: './add-thumbnail-form.component.html',
  styleUrls: ['./add-thumbnail-form.component.css']
})
export class AddThumbnailFormComponent implements OnInit {

  @Output() onAddThumbnail: EventEmitter<any> = new EventEmitter();
  loading: Boolean = false

  thumbnail: Thumbnail = {
    uri: ""
  }

  constructor(private thubnailService: ThumbnailService, private router: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loading = true
    setTimeout(() => {
      const id: string | any = this.router.snapshot.paramMap.get('id')
      this.thubnailService.store({
        ad: {
          id: id
        },
        ...this.thumbnail,
      }).subscribe(res => {
        this.thumbnail.uri = ""
        this.onAddThumbnail.emit()
        this.loading = false
      })
    }, 2000);

  }

  onLoading() {
    return this.loading ? "loading" : ""
  }

}
