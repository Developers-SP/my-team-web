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

  it('has login', inject([PlayerService], (service: PlayerService) => {
    expect(typeof service.login).toEqual('function');
  }));

  it('has player', inject([PlayerService], (service: PlayerService) => {
    expect(typeof service.player).toEqual('object');
  }));
});
