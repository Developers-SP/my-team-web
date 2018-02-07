import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { PlayerService } from '../../services/index';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {
  constructor(private servicePlayer: PlayerService) {}

  get player(): Player {
    return this.servicePlayer.player;
  }

  loggout() {
    this.servicePlayer.loggout();
  }

  login() {
    location.href =
      `${environment.steam.login}` +
      `?openid.ns=http://specs.openid.net/auth/2.0` +
      `&openid.mode=checkid_setup` +
      `&openid.return_to=${environment.url}` +
      `&openid.realm=${environment.url}` +
      `&openid.identity=http://specs.openid.net/auth/2.0/identifier_select` +
      `&openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select`;
  }
}
