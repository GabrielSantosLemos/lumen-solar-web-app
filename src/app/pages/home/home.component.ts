import { Component } from '@angular/core';

import * as Highcharts from 'highcharts/highmaps';

import * as worldMap from '@highcharts/map-collection/countries/br/br-all.geo.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = 'mapChart';
  data: [string, number][] = [
    ['br-sp', 10],
    ['br-ma', 11],
    ['br-pa', 12],
    ['br-sc', 13],
    ['br-ba', 14],
    ['br-ap', 15],
    ['br-ms', 16],
    ['br-mg', 17],
    ['br-go', 18],
    ['br-rs', 19],
    ['br-to', 20],
    ['br-pi', 21],
    ['br-al', 22],
    ['br-pb', 23],
    ['br-ce', 24],
    ['br-se', 25],
    ['br-rr', 26],
    ['br-pe', 27],
    ['br-pr', 28],
    ['br-es', 29],
    ['br-rj', 30],
    ['br-rn', 31],
    ['br-am', 32],
    ['br-mt', 33],
    ['br-df', 34],
    ['br-ac', 35],
    ['br-ro', 36],
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
}
