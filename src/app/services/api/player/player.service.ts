import { Injectable } from '@angular/core';
import { Player } from '../../../models/player.model';
import { RequestService } from '../../request.service';
import { ResponseApi } from '../../../models/response.model';

@Injectable()
export class PlayerService {
  private url = '/player';

  constructor(public request: RequestService) { }

  async login(id: string): Promise<ResponseApi<Player>> {
    return await (
      this.request.post(`${this.url}/login`, { id })
        .toPromise()
        .then(response => response.json())
    );
  }


}
