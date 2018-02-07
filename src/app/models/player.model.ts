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
    this.created = new Date();
    this.modified = this.created;

    if (!player) return;

    Object.assign(this, player);
  }
}
