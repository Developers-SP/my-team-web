import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../services/index';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  private steam_name: String;
  constructor(
    private playerService: PlayerService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.params.subscribe(params => this.steam_name = params['steam_name']);
  }

  get isProfileOwner(): Boolean {
    return  this.steam_name === this.player.steam_name;
  }

  get player () {
    return this.playerService.player;
  }
}
