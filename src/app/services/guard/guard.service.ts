import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { PlayerService } from 'app/services/api/player/player.service';

@Injectable()
export class GuardService implements CanActivate {

  constructor(
    private playerService: PlayerService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const logged = this.playerService.player.logged;
    if (!logged) this.router.navigate(['/']);
    return logged;
  }
}
