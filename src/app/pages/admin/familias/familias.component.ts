import { Component, inject, OnInit } from '@angular/core';
import { Familia } from './familia.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StatusComponent } from './status/status.component';
import { ExcluirComponent } from './excluir/excluir.component';

@Component({
  selector: 'app-familias',
  templateUrl: './familias.component.html',
  styleUrls: ['./familias.component.scss'],
})
export class FamiliasComponent implements OnInit {
  readonly baseUrl = environment.baseUrl;
  private modalService = inject(NgbModal);

  familias: Familia[] = [];

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this.atualizar();
  }

  status(id: number, status: number): void {
    const modalRef = this.modalService.open(StatusComponent, {
      centered: true,
      size: 'lg',
      backdrop: 'static',
      animation: true,
    });

    modalRef.componentInstance.familiaId = id;
    modalRef.componentInstance.familiaStatus = status;

    modalRef.result.then(() => {
      this.atualizar();
    });
  }

  excluir(id: number): void {
    const modalRef = this.modalService.open(ExcluirComponent, {
      centered: true,
      size: 'lg',
      backdrop: 'static',
      animation: true,
    });

    modalRef.componentInstance.id = id;

    modalRef.result.then(() => {
      this.atualizar();
    });
  }

  atualizar() {
    this._http.get<Familia[]>(`${this.baseUrl}/admin/familias`).subscribe({
      next: data => {
        this.familias = data;
      },
      error: error => {
        console.error('Erro ao carregar famílias:', error);
      },
    });
  }
}
