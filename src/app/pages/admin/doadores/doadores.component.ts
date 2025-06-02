import { Component } from '@angular/core';
import { Doador } from './doador.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-doadores',
  templateUrl: './doadores.component.html',
  styleUrls: ['./doadores.component.scss'],
})
export class DoadoresComponent {
  readonly baseUrl = environment.baseUrl;

  doadores: Doador[] = [];

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this._http.get<Doador[]>(`${this.baseUrl}/admin/doadores`).subscribe({
      next: (data) => {
        this.doadores = data;
      },
      error: (error) => {
        console.error('Erro ao carregar famílias:', error);
      },
    });
  }
}
