import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA, ElementRef } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TranslateService } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
//
// Traslations
//
import { HttpLoaderFactory } from './app/translate/loader.translate';
//
// Routes
//
import { AppRoutes } from './app/app.routes';
//
// Services
//
import {
  StorageService,
  PlayerService,
  GuardService
} from './app/services/';
//
// Directives
//
import { StylesDirective } from './app/directives/styles.directive';
//
// Pages
//
import { AppComponent } from 'app/app.component';
import {
  HomeComponent,
  PlayerComponent
} from 'app/pages/';
//
// layout
//
import {
  MainHeaderComponent,
  LanguageComponent
} from 'app/components/';
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
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerComponent,
    MainHeaderComponent,
    LanguageComponent,
    StylesDirective
  ],
  imports: [
    AppRoutes,
    BrowserModule,
    HttpClientModule,
    HttpClientTestingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    GuardService,
    StorageService,
    PlayerService,
    RouterTestingModule,
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    }
  ]
};
