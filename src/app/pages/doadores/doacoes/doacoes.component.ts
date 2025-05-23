import { Component } from '@angular/core';

@Component({
  selector: 'app-doacoes',
  templateUrl: './doacoes.component.html',
  styleUrls: ['./doacoes.component.scss'],
})
export class DoacoesComponent {
  doacoes: { id: number; valor: number; data: Date }[] = [
    { id: 1, valor: 100, data: new Date('2025-01-15') },
    { id: 2, valor: 50, data: new Date('2025-02-10') },
    { id: 3, valor: 75.5, data: new Date('2025-02-28') },
    { id: 4, valor: 200, data: new Date('2025-03-12') },
    { id: 5, valor: 30, data: new Date('2025-03-27') },
    { id: 6, valor: 120, data: new Date('2025-04-05') },
    { id: 7, valor: 90, data: new Date('2025-04-22') },
    { id: 8, valor: 150, data: new Date('2025-05-20') },
  ];
}
