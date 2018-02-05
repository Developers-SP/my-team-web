import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment.prod';
import { PlayerService } from '../services/api/player/player.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(this.authenticate);
  }

  authenticate(params) {
    const url: string =
      params['openid.identity'] || params['openid.claimed_id'];
    if (!url) return;

    const id = url.substring(environment.steam.id.length);
    if (!id) return;
  }
}
