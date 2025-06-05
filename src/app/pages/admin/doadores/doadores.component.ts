import { Component, inject } from '@angular/core';
import { Doador } from './doador.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExcluirComponent } from './excluir/excluir.component';

@Component({
  selector: 'app-doadores',
  templateUrl: './doadores.component.html',
  styleUrls: ['./doadores.component.scss'],
})
export class DoadoresComponent {
  readonly baseUrl = environment.baseUrl;
  private modalService = inject(NgbModal);

  doadores: Doador[] = [];

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this.atualizar();
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
    this._http.get<Doador[]>(`${this.baseUrl}/admin/doadores`).subscribe({
      next: data => {
        this.doadores = data;
      },
      error: error => {
        console.error('Erro ao carregar famílias:', error);
      },
    });
  }
}
