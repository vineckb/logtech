export interface Resource extends NotImplementedYetResource {
  idcliente: number;
  nome: string;
  email: string;
  cpfcnpj: string;
  ativo: string;
}

interface NotImplementedYetResource {
  ie: string;
  rota: string;
  cidade: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  telefone: string;
  email: string;
  status: string;
  latitude: string;
  longitude: string;
  shelflife: string;
}
