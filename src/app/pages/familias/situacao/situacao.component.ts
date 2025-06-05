import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Familia } from '../../admin/familias/familia.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-situacao',
  templateUrl: './situacao.component.html',
  styleUrls: ['./situacao.component.scss'],
})
export class SituacaoComponent {
  readonly baseUrl = environment.baseUrl;

  familia: Familia | null = null;
  id = 0;

  constructor(
    private _http: HttpClient,
    private _activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this._activateRoute.params.subscribe(param => {
      if (param['id']) {
        this.id = Number(param['id']);
        this._http
          .get<Familia>(`${this.baseUrl}/familias/${this.id}`)
          .subscribe({
            next: data => {
              this.familia = data;
            },
            error: error => {
              console.error('Erro ao buscar doador:', error);
            },
          });
      }
    });
  }
}
