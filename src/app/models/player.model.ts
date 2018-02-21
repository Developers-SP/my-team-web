export class Player {
  public active: number;
  public avatar: string;
  public background_image: string;
  public created: Date;
  public email: string;
  public first_name: string;
  public id: string;
  public last_name: string;
  public modified: Date;
  public steam_name: string;

  constructor(player?: Object | Player | any) {
    this.active = 1;
    this.avatar = '';
    this.background_image = '';
    this.created = new Date();
    this.email = '';
    this.first_name = '';
    this.id = '';
    this.last_name = '';
    this.modified = this.created;
    this.steam_name = '';

    if (!player) return;

    Object.assign(this, player);
    this.created = new Date(player.created);
    this.modified = new Date(player.modified);
  }

  public get logged() {
    return this.id.length === 17;
  }
}
