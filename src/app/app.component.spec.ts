import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutes } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
//
// layout
//
import { MainHeaderComponent } from './layout/index';

describe('AppComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        schemas: [NO_ERRORS_SCHEMA],
        declarations: [AppComponent, IndexComponent, MainHeaderComponent],
        imports: [AppRoutes, BrowserModule],
        providers: [
          RouterTestingModule,
          { provide: APP_BASE_HREF, useValue: '/' }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
  });
  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
});
