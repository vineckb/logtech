export interface Resource extends NotImplementedYetResource {
  idveiculo: number;
  name: string;
  transportadora: string;
  ativo: string;
}

interface NotImplementedYetResource {
  m3: string;
  profundidade: string;
  altura: string;
  lastro: string;
  pesomaximo: string;
  pesominimo: string;
  tara: string;
  chassi: string;
  nomefantasia: string;
  placa: string;
}
