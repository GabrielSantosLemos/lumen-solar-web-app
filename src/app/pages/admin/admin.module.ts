import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DoadoresComponent } from './doadores/doadores.component';
import { FamiliasComponent } from './familias/familias.component';
import { StatusComponent } from './familias/status/status.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    DoadoresComponent,
    FamiliasComponent,
    StatusComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule, NgbModule],
})
export class AdminModule {}
