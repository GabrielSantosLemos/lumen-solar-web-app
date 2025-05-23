import { Component } from '@angular/core';
import { Familia } from './familia.model';

@Component({
  selector: 'app-familias',
  templateUrl: './familias.component.html',
  styleUrls: ['./familias.component.scss'],
})
export class FamiliasComponent {
  familias: Familia[] = [
    {
      id: 1,
      nomeResponsavel: 101,
      cpf: '12345678901',
      rendaFamilias: 1200.0,
      numeroMoradores: 4,
      gastoEnergia: 150.75,
      status: 1,
    },
    {
      id: 2,
      nomeResponsavel: 102,
      cpf: '23456789012',
      rendaFamilias: 980.0,
      numeroMoradores: 3,
      gastoEnergia: 120.6,
      status: 0,
    },
    {
      id: 3,
      nomeResponsavel: 103,
      cpf: '34567890123',
      rendaFamilias: 1600.0,
      numeroMoradores: 5,
      gastoEnergia: 200.0,
      status: 1,
    },
    {
      id: 4,
      nomeResponsavel: 104,
      cpf: '45678901234',
      rendaFamilias: 850.0,
      numeroMoradores: 2,
      gastoEnergia: 90.4,
      status: 0,
    },
    {
      id: 5,
      nomeResponsavel: 105,
      cpf: '56789012345',
      rendaFamilias: 2100.0,
      numeroMoradores: 6,
      gastoEnergia: 300.1,
      status: 1,
    },
    {
      id: 6,
      nomeResponsavel: 106,
      cpf: '67890123456',
      rendaFamilias: 1400.0,
      numeroMoradores: 4,
      gastoEnergia: 180.0,
      status: 1,
    },
    {
      id: 7,
      nomeResponsavel: 107,
      cpf: '78901234567',
      rendaFamilias: 700.0,
      numeroMoradores: 1,
      gastoEnergia: 75.25,
      status: 0,
    },
    {
      id: 8,
      nomeResponsavel: 108,
      cpf: '89012345678',
      rendaFamilias: 1950.0,
      numeroMoradores: 5,
      gastoEnergia: 220.3,
      status: 1,
    },
  ];
}
