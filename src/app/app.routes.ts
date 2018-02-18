import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PlayerComponent } from './player/player.component';
import { GuardService } from './services';
import { RoleService } from './services/guard/role.service';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },

  {
    path: 'player/:steam_name',
    component: PlayerComponent,
  },
  {
    path: 'jogador/:steam_name',
    component: PlayerComponent,
  },
  {
    path: 'jugador/:steam_name',
    component: PlayerComponent,
  },
  { path: '**', redirectTo: '' }
];

export const AppRoutes = RouterModule.forRoot(routes, {
  enableTracing: false
});
