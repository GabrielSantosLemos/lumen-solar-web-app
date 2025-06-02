import { Component, inject } from '@angular/core';
import { Doacao } from '../../admin/doadores/doador.model';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DoarComponent } from './doar/doar.component';

@Component({
  selector: 'app-doacoes',
  templateUrl: './doacoes.component.html',
  styleUrls: ['./doacoes.component.scss'],
})
export class DoacoesComponent {
  readonly baseUrl = environment.baseUrl;
  private modalService = inject(NgbModal);

  doacoes: Doacao[] = [];
  id = 0;

  constructor(
    private _http: HttpClient,
    private _activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this._activateRoute.params.subscribe((param) => {
      if (param['id']) {
        this.id = Number(param['id']);
        this.atualizar();
      }
    });
  }

  doar() {
    const modalRef = this.modalService.open(DoarComponent, {
      centered: true,
      size: 'lg',
      backdrop: 'static',
      animation: true,
    });

    modalRef.componentInstance.doadorId = this.id;

    modalRef.result.then(() => {
      this.atualizar();
    });
  }

  atualizar() {
    this._http
      .get<Doacao[]>(`${this.baseUrl}/doadores/${this.id}/doacoes`)
      .subscribe({
        next: (data) => {
          this.doacoes = data;
        },
        error: (error) => {
          console.error('Erro ao buscar doador:', error);
        },
      });
  }
}
