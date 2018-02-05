import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
//
// Routes
//
import { AppRoutes, routes } from './app/app.routes';
//
// Services
//
import { RequestService } from './app/services/resquest/request.service';
import { PlayerService } from './app/services/api/player/player.service';
//
// Pages
//
import { AppComponent } from './app/app.component';
import { IndexComponent } from './app/index/index.component';
//
// Layout
//
import { MainHeaderComponent } from './app/layout/index';

export const appModule = {
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [AppComponent, IndexComponent, MainHeaderComponent],
  imports: [AppRoutes, HttpModule, BrowserModule],
  providers: [RouterTestingModule, { provide: APP_BASE_HREF, useValue: '/' }]
};
