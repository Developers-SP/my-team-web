import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'app/services/index';
import { Player } from 'app/models/player.model';
import { ResponseApi, Profile } from 'interfaces';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  private profile: Player;
  constructor(
    private playerService: PlayerService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      const steam_name = params['steam_name'];

      this.profile = new Player({ steam_name });

      if (!this.isProfileOwner) this.getProfile();
    });
  }

  getProfile() {
    this.playerService
      .get(this.player.steam_name)
      .subscribe(
        (res: ResponseApi<Profile>) => (this.profile = new Player(res.result.player)),
        (err: HttpErrorResponse) => console.exception(`${err.status}`, err.error)
      );
  }

  get isProfileOwner(): Boolean {
    return this.profile.steam_name === this.playerService.player.steam_name;
  }

  get player(): Player {
    console.log(this.profile);
    return this.isProfileOwner ? this.playerService.player : this.profile;
  }
}
