import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { PlayerService } from '../services/api/player/player.service';
import { ResponseApi } from '../models/response.model';
import { Player } from '../models/player.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  constructor(
    private servicePlayer: PlayerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => this.authenticate(params));
  }

  authenticate(params: any): void {
    const id = this.getId(params);
    if (!id) return;

    this.servicePlayer.login(id)
      .then((res: ResponseApi<Player>) => console.log(res))
      .catch((err: ResponseApi<any>) => console.exception(JSON.stringify(err)));
  }

  getId(params: any): string {
    const url = params['openid.identity'] || params['openid.claimed_id'];
    if (url) return url.substring(environment.steam.id.length);
  }
}
