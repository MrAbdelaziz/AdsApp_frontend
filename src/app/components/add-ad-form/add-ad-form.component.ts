import { AdsService } from './../../services/ads.service';
import { Ad } from './../../models/Ad';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-ad-form',
  templateUrl: './add-ad-form.component.html',
  styleUrls: ['./add-ad-form.component.css']
})
export class AddAdFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<any> = new EventEmitter();
  loading: Boolean = false

  ad: Ad = {
    name: "",
    price: 0,
    s_des: "",
    b_des: "",
  }

  constructor(private adsService: AdsService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loading = true
    setTimeout(() => {
      this.adsService.store(this.ad).subscribe(res => {
        this.onAdd.emit()
        this.loading = false
        this.ad = {
          name: "",
          price: 0,
          s_des: "",
          b_des: "",
        }
      })
    }, 2000);
  }

  onLoading() {
    return this.loading ? "loading" : ""
  }

}
