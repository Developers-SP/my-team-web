import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  }
];

export const AppRoutes = RouterModule.forRoot(routes, {
  enableTracing: false
});
