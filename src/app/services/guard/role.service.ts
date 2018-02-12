import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PlayerService } from '../api/player/player.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class RoleService implements CanActivate {

  constructor(
    private playerService: PlayerService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    let role;
    switch (route.data.role) {
      case 'playerProfile':
        const steam_name = route.params['steam_name'];
        role = this.playerService.player.steam_name === steam_name;
        if (!role) this.router.navigateByUrl(state.url.replace('/edit', '').replace('/editar', ''));
        break;
    }
    return role;
  }
}
