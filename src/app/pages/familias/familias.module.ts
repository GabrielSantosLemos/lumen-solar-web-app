import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamíliasRoutingModule } from './famílias-routing.module';
import { FamiliasComponent } from './familias.component';


@NgModule({
  declarations: [
    FamiliasComponent
  ],
  imports: [
    CommonModule,
    FamíliasRoutingModule
  ]
})
export class FamíliasModule { }
