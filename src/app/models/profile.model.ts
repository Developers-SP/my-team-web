import { Player } from './player.model';

export class Profile {

  public player: Player;
  public cover: String;

  constructor(profile?: Object | Profile | any) {

    this.player = new Player(profile.player || {});
    this.cover = '';

    if (!profile) return;


  }

}
