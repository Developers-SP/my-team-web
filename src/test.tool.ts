import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
//
// Routes
//
import { AppRoutes, routes } from './app/app.routes';
//
// Services
//
import { StorageService, PlayerService } from './app/services/index';
//
// Pages
//
import { AppComponent } from './app/app.component';
import { IndexComponent } from './app/index/index.component';
//
// Layout
//
import { MainHeaderComponent } from './app/layout/index';
//
// Models
//
import { Player } from './app/models/player.model';
const data = new Date();
export const mocks = {
  player: new Player({
    id: '76561198303910588',
    steam_name: 'WolfKillerJr',
    email: 'coder.marcos@gmail.com',
    first_name: 'Marcos Junior',
    last_name: 'WolfKillerJr',
    active: 1,
    avatar:
      'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/be/be27fbef1643893ce13b767c80ef0d69ddc728a6_full.jpg',
    created: data,
    modified: data
  })
};
export const appModule = {
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [AppComponent, IndexComponent, MainHeaderComponent],
  imports: [AppRoutes, HttpModule, BrowserModule],
  providers: [
    StorageService,
    PlayerService,
    RouterTestingModule,
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    },
    {
      provide: XHRBackend,
      useClass: MockBackend
    }
  ]
};
