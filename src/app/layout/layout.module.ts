import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {
  NgbCollapseModule,
  NgbDatepickerModule,
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, RouterModule, NgbDatepickerModule, NgbCollapseModule],
})
export class LayoutModule {}
