import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DoadoresComponent } from './doadores/doadores.component';
import { FamiliasComponent } from './familias/familias.component';

@NgModule({
  declarations: [AdminComponent, DoadoresComponent, FamiliasComponent],
  imports: [CommonModule, AdminRoutingModule, NgbModule],
})
export class AdminModule {}
