import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MomentModule } from 'ngx-moment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginPage } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AdminPage } from './pages/admin/admin.component';
import { AdsPage } from './pages/ads/ads.component';
import { AdsTableComponent } from './components/ads-table/ads-table.component';
import { AdCardComponent } from './components/ad-card/ad-card.component';
import { HomeAdminPage } from './pages/home-admin/home-admin.component';
import { ThumbnailsPage } from './pages/thumbnails/thumbnails.component';
import { AddThumbnailFormComponent } from './components/add-thumbnail-form/add-thumbnail-form.component';
import { ThumbnailTableComponent } from './components/thumbnail-table/thumbnail-table.component';
import { AddAdPage } from './pages/add-ad/add-ad.component';
import { AddAdFormComponent } from './components/add-ad-form/add-ad-form.component';
import { AddAdThumbnailPage } from './pages/add-ad-thumbnail/add-ad-thumbnail.component';
import { HomeAdTableComponent } from './components/home-ad-table/home-ad-table.component';
import { AdDetailPage } from './pages/ad-detail/ad-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    HeaderComponent,
    LoginPage,
    LoginFormComponent,
    AdminPage,
    AdsPage,
    AdsTableComponent,
    AdCardComponent,
    HomeAdminPage,
    ThumbnailsPage,
    AddThumbnailFormComponent,
    ThumbnailTableComponent,
    AddAdPage,
    AddAdFormComponent,
    AddAdThumbnailPage,
    HomeAdTableComponent,
    AdDetailPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IvyCarouselModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
