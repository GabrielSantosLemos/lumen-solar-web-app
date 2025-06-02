import { Component, OnInit } from '@angular/core';
import { Familia } from './familia.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-familias',
  templateUrl: './familias.component.html',
  styleUrls: ['./familias.component.scss'],
})
export class FamiliasComponent implements OnInit {
  readonly baseUrl = environment.baseUrl;

  familias: Familia[] = [];

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this._http.get<Familia[]>(`${this.baseUrl}/admin/familias`).subscribe({
      next: (data) => {
        this.familias = data;
      },
      error: (error) => {
        console.error('Erro ao carregar famílias:', error);
      },
    });
  }
}
