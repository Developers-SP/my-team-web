import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
//
// Traslations
//
import { HttpLoaderFactory } from './translate/loader.translate';
//
// Routes
//
import { AppRoutes } from './app.routes';
//
// Services
//
import {
  StorageService,
  PlayerService,
  GuardService
} from './services/index';
//
// Pages
//
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { PlayerComponent } from './player/player.component';
//
// layout
//
import { MainHeaderComponent } from './layout/index';
import { LanguageComponent } from './components/language/language.component';

@NgModule({
  declarations: [AppComponent, IndexComponent, PlayerComponent, MainHeaderComponent, LanguageComponent],
  imports: [
    AppRoutes,
    HttpModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [RoleService, GuardService, StorageService, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
