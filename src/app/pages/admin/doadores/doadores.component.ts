import { Component } from '@angular/core';
import { Doador } from './doador.model';

@Component({
  selector: 'app-doadores',
  templateUrl: './doadores.component.html',
  styleUrls: ['./doadores.component.scss'],
})
export class DoadoresComponent {
  doadores: Doador[] = [
    {
      nomeCompleto: 'João da Silva',
      email: 'joao.silva@example.com',
      telefone: '(11) 91234-5678',
      cpf: '12345678901',
      tipo: 'Pessoa Física',
      nomeEmpresa: '',
      cnpj: '',
    },
    {
      nomeCompleto: 'Maria Oliveira',
      email: 'maria.oliveira@example.com',
      telefone: '(21) 99876-5432',
      cpf: '23456789012',
      tipo: 'Pessoa Física',
      nomeEmpresa: '',
      cnpj: '',
    },
    {
      nomeCompleto: 'Carlos Pereira',
      email: 'carlos.pereira@example.com',
      telefone: '(31) 98765-4321',
      cpf: '34567890123',
      tipo: 'Pessoa Física',
      nomeEmpresa: '',
      cnpj: '',
    },
    {
      nomeCompleto: 'Ana Souza',
      email: 'ana.souza@example.com',
      telefone: '(41) 91234-5678',
      cpf: '45678901234',
      tipo: 'Pessoa Física',
      nomeEmpresa: '',
      cnpj: '',
    },
    {
      nomeCompleto: 'Empresa Alpha Ltda',
      email: 'contato@alpha.com.br',
      telefone: '(11) 4002-8922',
      cpf: '',
      tipo: 'Pessoa Jurídica',
      nomeEmpresa: 'Alpha Ltda',
      cnpj: '12345678000199',
    },
    {
      nomeCompleto: 'Beta Soluções',
      email: 'suporte@beta.com',
      telefone: '(21) 3222-1234',
      cpf: '',
      tipo: 'Pessoa Jurídica',
      nomeEmpresa: 'Beta Soluções Tecnológicas',
      cnpj: '98765432000155',
    },
    {
      nomeCompleto: 'Cláudia Mendes',
      email: 'claudia.mendes@example.com',
      telefone: '(51) 99888-7766',
      cpf: '56789012345',
      tipo: 'Pessoa Física',
      nomeEmpresa: '',
      cnpj: '',
    },
    {
      nomeCompleto: 'Gama Corp',
      email: 'financeiro@gamacorp.com',
      telefone: '(19) 3555-8899',
      cpf: '',
      tipo: 'Pessoa Jurídica',
      nomeEmpresa: 'Gama Corp',
      cnpj: '11223344000100',
    },
  ];
}
