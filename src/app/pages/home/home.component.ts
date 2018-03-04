import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'environments/environment';
import { PlayerService } from 'app/services/api/player/player.service';
import { ResponseApi, Auth } from 'app/interfaces';
import { Player } from 'app/models/player.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private servicePlayer: PlayerService,
    private route: ActivatedRoute,
    private router: Router
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
      .subscribe(
        (res: ResponseApi<Auth>) => (this.servicePlayer.player = res.result.player),
        (err: HttpErrorResponse) => console.exception(`${err.status}`, err.error),
        () => {
          const url = this.router.url;
          this.router.navigateByUrl(url.substr(0, url.indexOf('?')));
        }
      );
  }

  getId(params: any): string {
    const url = params['openid.identity'] || params['openid.claimed_id'];
    if (url) return url.substring(environment.steam.id.length);
  }
}
