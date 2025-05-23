import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoadoresComponent } from './doadores.component';

const routes: Routes = [
  {
    path: '',
    component: DoadoresComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoadoresRoutingModule {}
