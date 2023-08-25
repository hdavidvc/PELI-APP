import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NoimgPipe } from './pipes/noimg.pipe';
import { TopBannerComponent } from './components/TopBanner.Component';

import { AdsenseModule } from 'ng2-adsense';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    PeliculaComponent,
    LoadingComponent,
    NoimgPipe,
    TopBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-8791984262740129',
      adSlot: 1498632190,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
