import { TestBed, getTestBed, inject, fakeAsync, async, tick } from '@angular/core/testing';
import { PlayerService } from 'app/services/api/player/player.service';
import { HttpTestingController } from '@angular/common/http/testing';
import { appModule, mocks } from 'src/test.tool';
import { environment } from 'environment';

describe('PlayerService', () => {
  let injector: TestBed;
  let service: PlayerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule(appModule);

    injector = getTestBed();
    service = injector.get(PlayerService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it(
    'should be created',
    () => {
      expect(service).toBeTruthy();
    }
  );

  it(
    'has login',
    () => {
      expect(typeof service.login).toEqual('function');
    }
  );

  it(
    'has player',
    () => {
      expect(typeof service.player).toEqual('object');
    }
  );

  it(
    'player login',
    () => {
        const mock = {
          status: 'OK',
          result: { player: mocks.player, new: 1 }
        };

        service.login(mocks.player.id).subscribe(
          response => expect(response).toBeTruthy()
        );

      const req = httpMock.expectOne(`${environment.api}/player/login`);
      expect(req.request.method).toBe('POST');
      req.flush(mock);
    }
  );

  it(
    'should save on localStorage',
    () => {
      service.player = mocks.player;
      expect(localStorage.getItem('_player')).toBeTruthy();
    }
  );

  it(
    'should delete on localStorage',
    () => {
      service.loggout();
      expect(localStorage.getItem('_player')).toBeFalsy();
    }
  );

  it(
    'should select on localStorage',
    () => {
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
    }
  );
});
