import { TestBed, inject } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { GuardService } from './guard.service';

import { appModule } from '../../../test.tool';
import { PlayerService } from '../index';

describe('GuardService', () => {
  let next: ActivatedRouteSnapshot;
  let state: RouterStateSnapshot;
  beforeEach(() => {
    TestBed.configureTestingModule(appModule);
  });

  it(
    'should be created',
    inject([GuardService], (service: GuardService) => {
      expect(service).toBeTruthy();
    })
  );

  it(
    'should be true',
    inject([GuardService], (service: GuardService) => {
      expect(service.canActivate(next, state)).toBeTruthy();
    })
  );

  it(
    'should be false',
    inject([GuardService, PlayerService], (service: GuardService, playerService: PlayerService) => {
      playerService.loggout();
      expect(service.canActivate(next, state)).toBeFalsy();
    })
  );
});
