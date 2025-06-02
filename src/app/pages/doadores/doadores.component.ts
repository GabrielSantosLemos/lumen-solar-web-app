import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Doador } from '../admin/doadores/doador.model';
import { environment } from 'src/environments/environment.prod';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doadores',
  templateUrl: './doadores.component.html',
  styleUrls: ['./doadores.component.scss'],
})
export class DoadoresComponent {
  constructor() {}
}
