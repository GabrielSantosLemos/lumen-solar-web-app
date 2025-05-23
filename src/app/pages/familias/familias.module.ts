import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamiliasComponent } from './familias.component';
import { FamiliasRoutingModule } from './familias-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditarComponent } from './editar/editar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FamiliasComponent, EditarComponent],
  imports: [
    CommonModule,
    FamiliasRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class FamíliasModule {}
