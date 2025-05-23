import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { TermosDeUsoComponent } from './pages/termos-de-uso/termos-de-uso.component';
import { PoliticaDePrivacidadeComponent } from './pages/politica-de-privacidade/politica-de-privacidade.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () =>
      import('../app/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'termos-de-uso',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: TermosDeUsoComponent,
      },
    ],
  },
  {
    path: 'politica-de-privacidade',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: PoliticaDePrivacidadeComponent,
      },
    ],
  },
  {
    path: 'doadores',
    component: LayoutComponent,
    loadChildren: () =>
      import('../app/pages/doadores/doadores.module').then(
        (m) => m.DoadoresModule
      ),
  },
  {
    path: 'familias',
    component: LayoutComponent,
    loadChildren: () =>
      import('../app/pages/familias/familias.module').then(
        (m) => m.FamíliasModule
      ),
  },
  {
    path: 'admin',
    component: LayoutComponent,
    loadChildren: () =>
      import('../app/pages/admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
