import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PlayerComponent } from './player/player.component';
import { GuardService } from './services';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },

  {
    path: 'Player/:steam_name',
    component: PlayerComponent,
  },
  {
    path: 'Jogador/:steam_name',
    component: PlayerComponent,
  },
  {
    path: 'Jugador/:steam_name',
    component: PlayerComponent,
  },
  { path: '**', redirectTo: '' }
];

export const AppRoutes = RouterModule.forRoot(routes, {
  enableTracing: false
});
