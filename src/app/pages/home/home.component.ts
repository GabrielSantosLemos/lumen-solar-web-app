import { Component } from '@angular/core';

import * as Highcharts from 'highcharts/highmaps';

import * as worldMap from '@highcharts/map-collection/countries/br/br-all.geo.json';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

export interface Dashboard {
  totalFamiliasAjudadas: number;
  totalPlacasSolaresAdquiridas: number;
  totalValorDoacaoRecebidas: number;
  totalValorContasPagas: number;
  contasPagasPorEstado: { uf: string; valorTotal: number }[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  chartInstance: Highcharts.Chart | null = null;
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = 'mapChart';
  data: [string, number][] = [
    ['br-sp', 0],
    ['br-ma', 0],
    ['br-pa', 0],
    ['br-sc', 0],
    ['br-ba', 0],
    ['br-ap', 0],
    ['br-ms', 0],
    ['br-mg', 0],
    ['br-go', 0],
    ['br-rs', 0],
    ['br-to', 0],
    ['br-pi', 0],
    ['br-al', 0],
    ['br-pb', 0],
    ['br-ce', 0],
    ['br-se', 0],
    ['br-rr', 0],
    ['br-pe', 0],
    ['br-pr', 0],
    ['br-es', 0],
    ['br-rj', 0],
    ['br-rn', 0],
    ['br-am', 0],
    ['br-mt', 0],
    ['br-df', 0],
    ['br-ac', 0],
    ['br-ro', 0],
  ];

  chartOptions: Highcharts.Options = {
    chart: {
      map: worldMap,
    },
    title: {
      text: 'Contas pagas por estato',
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: 'spacingBox',
      },
    },
    legend: {
      enabled: true,
    },
    colorAxis: {
      min: 0,
      stops: [
        [0, '#c4e8ff'], // Amarelo muito claro
        [0.5, '#4585ad'], // Amarelo médio
        [1, '#016caf'], // Amarelo forte
      ],
    },
    series: [
      {
        type: 'map',
        name: '',
        states: {
          hover: {
            color: '#88bf32',
          },
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}',
        },
        allAreas: false,
        data: this.data,
      },
    ],
  };

  readonly baseUrl = environment.baseUrl;

  dashboard: Dashboard | null = null;

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this._http.get<Dashboard>(`${this.baseUrl}/dashboards`).subscribe({
      next: data => {
        this.dashboard = data;
        const mapaValores = new Map(
          data.contasPagasPorEstado.map(item => [
            item.uf.toLowerCase(),
            item.valorTotal,
          ])
        );

        this.data = this.data.map(([uf, _]) => [uf, mapaValores.get(uf) ?? 0]);

        if (this.chartInstance) {
          const series = this.chartInstance.series[0];
          series.setData(this.data, true);
        }
      },
      error: error => {
        console.error('Erro ao carregar dashboard:', error);
      },
    });
  }
}
