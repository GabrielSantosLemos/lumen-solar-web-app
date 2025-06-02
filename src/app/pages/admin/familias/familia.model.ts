export interface Familia {
  id: number;
  nomeResponsavel: string;
  cpf: string;
  celular: string;
  rendaFamiliar: number;
  numeroMoradores: number;
  gastoComEnergia: number;
  situacaoVulnerabilidade: string;
  status: number;

  user: {
    email: string;
  };
}
