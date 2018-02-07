export class Player {
  public id: string;
  public steam_name: string;
  public email: string;
  public first_name: string;
  public last_name: string;
  public active: number;
  public avatar: string;
  public created: Date;
  public modified: Date;

  constructor(player?: Object | Player) {
    this.id = '';
    this.steam_name = '';
    this.email = '';
    this.first_name = '';
    this.last_name = '';
    this.active = 1;
    this.avatar = '';
    this.created = new Date();
    this.modified = this.created;

    if (!player) return;

    Object.assign(this, player);
  }

  public get logged() {
    return this.id.length === 17;
  }
}
