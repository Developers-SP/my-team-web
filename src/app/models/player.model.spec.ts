import { TestBed, inject } from '@angular/core/testing';
import { appModule, mocks } from '../../test.tool';
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
    expect(player.logged).toEqual(false);
  });

  it('should be merge props', () => {
    const _player = mocks.player;

    const player = new Player(_player);
    expect(player.id).toEqual(_player.id);
    expect(player.steam_name).toEqual(_player.steam_name);
    expect(player.email).toEqual(_player.email);
    expect(player.first_name).toEqual(_player.first_name);
    expect(player.last_name).toEqual(_player.last_name);
    expect(player.active).toEqual(_player.active);
    expect(player.avatar).toEqual(_player.avatar);

    expect(player.created).toEqual(_player.created);
    expect(player.modified).toEqual(_player.modified);
    expect(player.logged).toEqual(true);
  });

  it('should be merge with correct types', () => {
    const _player = mocks.player;

    const player = new Player(_player);

    expect(player.created instanceof Date).toBeTruthy();
    expect(player.modified instanceof Date).toBeTruthy();
  });
});
