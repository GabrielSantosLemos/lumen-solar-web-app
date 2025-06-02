import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Familia } from '../admin/familias/familia.model';

@Component({
  selector: 'app-familias',
  templateUrl: './familias.component.html',
  styleUrls: ['./familias.component.scss'],
})
export class FamiliasComponent {
  readonly baseUrl = environment.baseUrl;

  familia: Familia | null = null;
  id = 0;

  constructor(
    private _http: HttpClient,
    private _activateRoute: ActivatedRoute
  ) {}

  active = 'top';

  ngOnInit() {
    this._activateRoute.params.subscribe((param) => {
      if (param['id']) {
        this.id = Number(param['id']);
        this._http
          .get<Familia>(`${this.baseUrl}/familias/${this.id}`)
          .subscribe({
            next: (data) => {
              this.familia = data;
            },
            error: (error) => {
              console.error('Erro ao buscar doador:', error);
            },
          });
      }
    });
  }
}
