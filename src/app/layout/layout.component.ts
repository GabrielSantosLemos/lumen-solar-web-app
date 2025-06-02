import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import {
  ModalDismissReasons,
  NgbDatepickerModule,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { AccountsComponent } from '../pages/accounts/accounts.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  private modalService = inject(NgbModal);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  isMenuCollapsed = true;
  closeResult = '';
  user: any = null;

  constructor() {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const shouldOpenLogin = params['login'] === 'true';
      if (shouldOpenLogin) {
        this.login();
      }
    });

    const stored = localStorage.getItem('USER');
    if (stored) {
      this.user = JSON.parse(stored);
    }
  }

  open(content: TemplateRef<any>) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then();
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
        () => {
          this.router.navigate([], {
            queryParams: { login: null },
            queryParamsHandling: 'merge',
          });
        },
        () => {
          this.router.navigate([], {
            queryParams: { login: null },
            queryParamsHandling: 'merge',
          });
        }
      );
  }

  logout(): void {
    localStorage.removeItem('USER');
    this.user = null;
    this.router.navigate(['/']);
  }

  refreshUser(): void {
    const stored = localStorage.getItem('USER');
    this.user = stored ? JSON.parse(stored) : null;
  }

  goToAccount(): void {
    if (!this.user) return;

    const id = this.user.id;
    const roles = this.user.roles || [];

    if (roles.includes('familia')) {
      this.router.navigate([`/familias/${id}`]);
    } else if (roles.includes('doador')) {
      this.router.navigate([`/doadores/${id}`]);
    } else if (roles.includes('admin')) {
      this.router.navigate([`/admin`]);
    } else {
      this.router.navigate(['/']);
    }
  }
}
