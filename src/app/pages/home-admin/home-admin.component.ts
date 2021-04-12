import { Statistiques } from './../../models/Statistiques';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminPage implements OnInit {

  statistiques: Statistiques | any = {
    adCounts: 0,
    userCounts: 0
  }

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.statistiques().subscribe(res => this.statistiques = res)
  }

}
