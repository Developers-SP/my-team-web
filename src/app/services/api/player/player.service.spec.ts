import { TestBed, inject } from '@angular/core/testing';
import { PlayerService } from './player.service';
import { appModule } from '../../../../test.tool';

describe('PlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(appModule);
  });

  it('should be created', inject([PlayerService], (service: PlayerService) => {
    expect(service).toBeTruthy();
  }));

  describe('login', () => {
    it('has method', inject([PlayerService], (service: PlayerService) => {
      expect(typeof service.login).toEqual('function');
    }));
  });
});
