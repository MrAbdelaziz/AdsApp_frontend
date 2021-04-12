import { AuthService } from './services/auth.service';
import { AdDetailPage } from './pages/ad-detail/ad-detail.component';
import { AddAdThumbnailPage } from './pages/add-ad-thumbnail/add-ad-thumbnail.component';
import { AddAdPage } from './pages/add-ad/add-ad.component';
import { ThumbnailsPage } from './pages/thumbnails/thumbnails.component';
import { AdsPage } from './pages/ads/ads.component';
import { AdminPage } from './pages/admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { LoginPage } from './pages/login/login.component';
import { HomeAdminPage } from './pages/home-admin/home-admin.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: "login", component: LoginPage },
  { path: 'ads', component: HomePage },
  {
    path: "ads/add", component: AddAdPage
  },
  {
    path: "ads/:id/thubnails", component: AddAdThumbnailPage
  },
  {
    path: 'ads/:id', component: AdDetailPage
  },
  {
    path: 'admin',
    component: AdminPage,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        component: HomeAdminPage,
      },
      {
        path: 'ads',
        component: AdsPage,
      },

      {
        path: 'ads/:id/thumbnails',
        component: ThumbnailsPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
