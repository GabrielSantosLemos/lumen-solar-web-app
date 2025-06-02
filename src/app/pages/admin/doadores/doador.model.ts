export interface Doador {
  nomeCompleto: string;
  email: string;
  celular: string;
  cpf: string;
  tipo: number;
  nomeEmpresa: string;
  cnpj: string;
  doacoes: Doacao[];
  user: {
    email: string;
  };
}

export interface Doacao {
  id: number;
  valor: number;
  data: Date;
}
