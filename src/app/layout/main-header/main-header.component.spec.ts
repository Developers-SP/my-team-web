import {
  async,
  fakeAsync,
  ComponentFixture,
  TestBed,
  tick
} from '@angular/core/testing';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { appModule } from '../../../test.tool';
//
// Component
//
import { MainHeaderComponent } from './main-header.component';

describe('MainHeaderComponent', () => {
  let component: MainHeaderComponent;
  let fixture: ComponentFixture<MainHeaderComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule(appModule).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('login', () => {
    it('has method', () => {
      expect(typeof component.login).toEqual('function');
    });
  });
});
