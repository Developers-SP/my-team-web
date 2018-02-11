import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { PlayerService } from '../services/api/player/player.service';
import { ResponseApi, Auth } from '../interfaces/index';
import { Player } from '../models/player.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  constructor(
    private servicePlayer: PlayerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.servicePlayer.player.id.length === 17) return;
    this.route.queryParams.subscribe(params => this.authenticate(params));
  }

  authenticate(params: any): void {
    const id = this.getId(params);
    if (!id) return;

    this.servicePlayer
      .login(id)
      .then(
        (res: ResponseApi<Auth>) => (this.servicePlayer.player = res.result.player)
      )
      .then(
        () => {
          const url = this.router.url;
          this.router.navigateByUrl(url.substr(0, url.indexOf('?')));
        }
      )
      .catch((err: ResponseApi<any>) => console.exception(JSON.stringify(err)));
  }

  getId(params: any): string {
    const url = params['openid.identity'] || params['openid.claimed_id'];
    if (url) return url.substring(environment.steam.id.length);
  }
}
