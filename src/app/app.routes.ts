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
    path: '/player/:steam_name',
    component: PlayerComponent,
  },
  {
    path: '/player/:steam_name/edit',
    component: PlayerComponent,
    canActivate: [GuardService]
  },

  {
    path: '/jogador/:steam_name' ,
    component: PlayerComponent,
  },
  {
    path: '/jogador/:steam_name/editar',
    component: PlayerComponent,
    canActivate: [GuardService]
  },

  {
    path: '/jugador/:steam_name' ,
    component: PlayerComponent,
  },
  {
    path: '/jugador/:steam_name/editar',
    component: PlayerComponent,
    canActivate: [GuardService]
  }
];

export const AppRoutes = RouterModule.forRoot(routes, {
  enableTracing: false
});
