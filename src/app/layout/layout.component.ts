import { Component, inject, TemplateRef } from '@angular/core';
import {
  ModalDismissReasons,
  NgbDatepickerModule,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { AccountsComponent } from '../pages/accounts/accounts.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  private modalService = inject(NgbModal);
  isMenuCollapsed = true;
  closeResult = '';

  constructor() {}

  open(content: TemplateRef<any>) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }

  login(): void {
    this.modalService
      .open(AccountsComponent, {
        centered: true,
        size: 'lg',
        backdrop: 'static',
        animation: true,
      })
      .result.then(
        (result) => {
          console.log('Fechado com:', result);
        },
        (reason) => {
          console.log('Dispensado com:', reason);
        }
      );
  }
}
