import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserModule } from '@angular/platform-browser';
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
} from './services/';
//
// Directives
//
import { StylesDirective } from './directives/styles.directive';
//
// Pages
//
import { AppComponent } from './app.component';
import {
  HomeComponent,
  PlayerComponent
} from './pages/';
//
// layout
//
import {
  MainHeaderComponent,
  LanguageComponent
} from './components/';

@NgModule({
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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [GuardService, StorageService, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
