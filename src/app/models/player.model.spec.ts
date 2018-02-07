import { TestBed, inject } from '@angular/core/testing';
import { appModule } from '../../test.tool';
import { Player } from './player.model';

describe('PlayerModel', () => {
  it('should be created', () => {
    const player = new Player();
    expect(player).toBeTruthy();
  });

  it('should be created fields', () => {
    const player = new Player();
    expect(player.id).toEqual('');
    expect(player.steam_name).toEqual('');
    expect(player.email).toEqual('');
    expect(player.first_name).toEqual('');
    expect(player.last_name).toEqual('');
    expect(player.active).toEqual(1);
    expect(player.avatar).toEqual('');
  });

  it('should be merge props', () => {
    const data = new Date();
    const _player = {
      id: '1',
      steam_name: 'WolfKillerJr',
      email: 'coder.marcos@gmail.com',
      first_name: 'Marcos Junior',
      last_name: 'WolfKillerJr',
      active: 1,
      avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/be/be27fbef1643893ce13b767c80ef0d69ddc728a6_full.jpg',
      created: data,
      modified: data
    };

    const player = new Player(_player);
    expect(player.id).toEqual(_player.id);
    expect(player.steam_name).toEqual(_player.steam_name);
    expect(player.email).toEqual(_player.email);
    expect(player.first_name).toEqual(_player.first_name);
    expect(player.last_name).toEqual(_player.last_name);
    expect(player.active).toEqual(_player.active);
    expect(player.avatar).toEqual(_player.avatar);
    expect(player.created).toEqual(data);
    expect(player.modified).toEqual(data);
  });
});
