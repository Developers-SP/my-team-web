import { TestBed, inject, fakeAsync, async, tick } from '@angular/core/testing';
import { PlayerService } from './player.service';
import { appModule, mocks } from '../../../../test.tool';
import { XHRBackend } from '@angular/http';
import { ResponseOptions } from '@angular/http';

describe('PlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(appModule);
  });

  it(
    'should be created',
    inject([PlayerService], (service: PlayerService) => {
      expect(service).toBeTruthy();
    })
  );

  it(
    'has login',
    inject([PlayerService], (service: PlayerService) => {
      expect(typeof service.login).toEqual('function');
    })
  );

  it(
    'has player',
    inject([PlayerService], (service: PlayerService) => {
      expect(typeof service.player).toEqual('object');
    })
  );

  it(
    'player login',
    inject(
      [PlayerService, XHRBackend],
      (service: PlayerService, mockBackend) => {
        mockBackend.connections.subscribe(connection => {
          const options = new ResponseOptions({
            body: JSON.stringify({
              status: 'OK',
              result: { player: mocks.player, new: 1 }
            })
          });
          connection.mockRespond(new Response(options));
        });

        service.login(mocks.player.id).then(response => {
          expect(response).toBeTruthy();
        });
      }
    )
  );

  it(
    'should save on localStorage',
    inject([PlayerService], (service: PlayerService) => {
      service.player = mocks.player;
      expect(localStorage.getItem('_player')).toBeTruthy();
    })
  );

  it(
    'should delete on localStorage',
    inject([PlayerService], (service: PlayerService) => {
      service.loggout();
      expect(localStorage.getItem('_player')).toBeFalsy();
    })
  );

  it(
    'should select on localStorage',
    inject([PlayerService], (service: PlayerService) => {
      service.player = mocks.player;
      expect(service.player.id).toEqual(mocks.player.id);
      expect(service.player.steam_name).toEqual(mocks.player.steam_name);
      expect(service.player.email).toEqual(mocks.player.email);
      expect(service.player.first_name).toEqual(mocks.player.first_name);
      expect(service.player.last_name).toEqual(mocks.player.last_name);
      expect(service.player.active).toEqual(mocks.player.active);
      expect(service.player.avatar).toEqual(mocks.player.avatar);
      expect(service.player.created).toEqual(mocks.player.created);
      expect(service.player.modified).toEqual(mocks.player.modified);
    })
  );
});
