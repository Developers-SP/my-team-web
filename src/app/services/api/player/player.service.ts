import { Injectable } from '@angular/core';
import { Player } from '../../../models/player.model';
import { RequestService } from '../../request.service';
import { StorageService } from '../../storage.service';
import { ResponseApi, Auth } from '../../../interfaces/index';

@Injectable()
export class PlayerService {
  private url = '/player';

  constructor(
    public request: RequestService,
    public storage: StorageService,
  ) { }

  async login(id: string): Promise<ResponseApi<Auth>> {
    return await (
      this.request.post(`${this.url}/login`, { id })
        .toPromise()
        .then(response => response.json())
    );
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
