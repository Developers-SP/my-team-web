import { RouterModule, Routes } from '@angular/router';

import { GuardService } from 'app/services/guard/guard.service';

import { HomeComponent } from 'app/pages/home/home.component';
import { PlayerComponent } from 'app/pages/player/player.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
