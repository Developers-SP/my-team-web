import { environment } from '../../environments/environment';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../services/index';
import { Player } from '../models/player.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  private profile: Player;
  constructor(
    private detection: ChangeDetectorRef,
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
      .then(response => (this.profile = new Player(response.result.player)));
  }

  get isProfileOwner(): Boolean {
    return this.profile.steam_name === this.playerService.player.steam_name;
  }

  get player(): Player {
    console.log(this.profile);
    return this.isProfileOwner ? this.playerService.player : this.profile;
  }
}
