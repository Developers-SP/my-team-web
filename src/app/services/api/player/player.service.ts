import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Player } from '../../../models/player.model';
import { StorageService } from '../../storage.service';
import { ResponseApi, Auth } from '../../../interfaces/index';
import { JsonToForm, JsonToUrl } from '../../../helpers/request.helper';

@Injectable()
export class PlayerService {
  private options = new RequestOptions();
  private url = '/player';

  constructor(private storage: StorageService, public http: Http) {
    this.options.headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
  }

  async login(id: string): Promise<ResponseApi<Auth>> {
    return await this.http
      .post(`${this.url}/login`, JsonToUrl({ id }))
      .toPromise()
      .then(response => response.json());
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
