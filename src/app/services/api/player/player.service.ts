import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Player } from '../../../models/player.model';
import { StorageService } from '../../storage/storage.service';
import { ResponseApi, Auth, Profile } from '../../../interfaces/index';
import { JsonToForm, JsonToUrl } from '../../../helpers/request.helper';
import { environment } from '../../../../environments/environment';

@Injectable()
export class PlayerService {
  private options = new RequestOptions();
  private url = `${environment.api}/player`;

  constructor(private storage: StorageService, public http: Http) {
    this.options.headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
  }

  async login(id: string): Promise<ResponseApi<Auth>> {
    return await this.http
      .post(`${this.url}/login`, JsonToUrl({ id }), this.options)
      .toPromise()
      .then(response => response.json());
  }

  async get(id: string): Promise<ResponseApi<Profile>> {
    return new Promise<ResponseApi<Profile>>((res, rej) => {
      res({
        status: 'OK',
        result: {
          player: new Player({
            steam_name: id,
            background_image: 'http://cdn.akamai.steamstatic.com/steam/apps/730/ss_ccc4ce6edd4c454b6ce7b0757e633b63aa93921d.1920x1080.jpg?t=1513742714',
            id: 76561198121209165,
            email: null,
            first_name: null,
            last_name: null,
            active: 1,
            avatar:
              'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/5d/5d82427acccb75bc31f945f65dec3dafd50cc0af_full.jpg',
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
