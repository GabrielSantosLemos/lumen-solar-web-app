import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamiliasComponent } from './familias.component';
import { FamiliasRoutingModule } from './familias-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditarComponent } from './editar/editar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { NgxCurrencyDirective } from 'ngx-currency';
import { SituacaoComponent } from './situacao/situacao.component';

@NgModule({
  declarations: [FamiliasComponent, EditarComponent, SituacaoComponent],
  imports: [
    CommonModule,
    FamiliasRoutingModule,
    NgbModule,
    FormsModule,
    NgxCurrencyDirective,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [provideNgxMask()],
})
export class FamíliasModule {}
