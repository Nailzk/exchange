import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'exchange',
    loadChildren: () => import('exchange').then((m) => m.ExchangeModule),
  },
  { path: '*', pathMatch: 'full', redirectTo: 'exchange' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}