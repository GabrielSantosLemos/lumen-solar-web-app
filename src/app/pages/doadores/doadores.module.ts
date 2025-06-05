import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoadoresRoutingModule } from './doadores-routing.module';
import { DoadoresComponent } from './doadores.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditarComponent } from './editar/editar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoacoesComponent } from './doacoes/doacoes.component';
import { DoarComponent } from './doacoes/doar/doar.component';
import {
  NgxMaskDirective,
  NgxMaskPipe,
  provideEnvironmentNgxMask,
  provideNgxMask,
} from 'ngx-mask';
import { NgxCurrencyDirective } from 'ngx-currency';

@NgModule({
  declarations: [
    DoadoresComponent,
    EditarComponent,
    DoacoesComponent,
    DoarComponent,
  ],
  imports: [
    CommonModule,
    DoadoresRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCurrencyDirective,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [provideNgxMask()],
})
export class DoadoresModule {}
