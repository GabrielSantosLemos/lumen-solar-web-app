import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoadoresRoutingModule } from './doadores-routing.module';
import { DoadoresComponent } from './doadores.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditarComponent } from './editar/editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DoacoesComponent } from './doacoes/doacoes.component';

@NgModule({
  declarations: [DoadoresComponent, EditarComponent, DoacoesComponent],
  imports: [
    CommonModule,
    DoadoresRoutingModule,
    NgbModule,
    ReactiveFormsModule,
  ],
})
export class DoadoresModule {}
