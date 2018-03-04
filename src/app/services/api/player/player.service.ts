import { Injectable } from '@angular/core';

import { environment } from 'environments/environment';

import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Player } from 'app/models/player.model';
import { ResponseApi, Auth, Profile } from 'app/interfaces/index';

import { StorageService } from 'app/services/storage/storage.service';


@Injectable()
export class PlayerService {
  private url = `${environment.api}/player`;
  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  constructor(
    private storage: StorageService,
    public http: HttpClient
  ) { }

  login(id: string): Observable<ResponseApi<Auth>> {

    const params = new HttpParams()
      .set('id', id);

    return this.http
      .post<ResponseApi<Auth>>(`${this.url}/login`, params, this.options);
  }

  get(id: string): Observable<Object> {
    return new Observable<Object>((obs) => {
      obs.next({
        status: 'OK',
        result: {
          player: new Player({
            steam_name: id,
            background_image: 'http://cdn.akamai.steamstatic.com/steam/apps/730/'
              + 'ss_ccc4ce6edd4c454b6ce7b0757e633b63aa93921d.1920x1080.jpg?t=1513742714',
            id: 76561198121209165,
            email: null,
            first_name: null,
            last_name: null,
            active: 1,
            avatar:
              'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/' +
              +'5d/5d82427acccb75bc31f945f65dec3dafd50cc0af_full.jpg',
            created: '2018-02-05T11:47:19',
            modified: '2018-02-05T12:56:39'
          })
        }
      });
    });
    // return await this.http
    //   .get(`${this.url}/player/${id}`)
    //   .toPromise()
    //   .then(response => response.json());
  }

  loggout(): void {
    this.storage.delete('_player');
  }

  set player(value: Player) {
    this.storage.save('_player', value);
  }

  get player(): Player {
    const player = this.storage.select('_player');
    return new Player(player);
  }
}
