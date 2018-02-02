import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
//
// layout
//
import { MainHeaderComponent } from './layout/index';

@NgModule({
  declarations: [AppComponent, IndexComponent, MainHeaderComponent],
  imports: [AppRoutes, BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
