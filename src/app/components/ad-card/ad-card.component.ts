import { Router } from '@angular/router';
import { Ad } from './../../models/Ad';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-card',
  templateUrl: './ad-card.component.html',
  styleUrls: ['./ad-card.component.css']
})
export class AdCardComponent implements OnInit {

  @Input() ad!: Ad

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  geAdDetails(id: number) {
    this.router.navigate([`ads/${id}`])
  }

}
