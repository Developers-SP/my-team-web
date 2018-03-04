// tslint:disable:prefer-const

import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { GuardService } from './guard.service';

import { appModule } from 'src/test.tool';
import { PlayerService } from 'app/services/';

describe('GuardService', () => {
  let next: ActivatedRouteSnapshot;
  let state: RouterStateSnapshot;

  let injector: TestBed;
  let player: PlayerService;
  let service: GuardService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule(appModule);

    injector = getTestBed();
    player = injector.get(PlayerService);
    service = injector.get(GuardService);
    httpMock = injector.get(HttpTestingController);
  });

  it(
    'should be created',
    () => {
      expect(service).toBeTruthy();
    }
  );

  it(
    'should be true',
    () => {
      expect(service.canActivate(next, state)).toBeTruthy();
    }
  );

  it(
    'should be false',
    () => {
      player.loggout();
      expect(service.canActivate(next, state)).toBeFalsy();
    }
  );
});
