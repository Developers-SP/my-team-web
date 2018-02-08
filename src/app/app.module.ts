import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
//
// Routes
//
import { AppRoutes } from './app.routes';
//
// Services
//
import {
  StorageService,
  PlayerService
} from './services/index';
//
// Pages
//
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
//
// layout
//
import { MainHeaderComponent } from './layout/index';

@NgModule({
  declarations: [AppComponent, IndexComponent, MainHeaderComponent],
  imports: [AppRoutes, HttpModule, BrowserModule],
  providers: [StorageService, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
