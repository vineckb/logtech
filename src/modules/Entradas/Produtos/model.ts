export interface Resource {
  codreferencia: number;
  controlalote: string;
  controlanumserie: string;
  controlavalidade: string;
  cp_fornecedores: number;
  fornecedores: {
    nome: string;
  };
  subgrupos: {
    nome: string;
  };
  grupos: {
    nome: string;
  };
  cp_grupos: number;
  cp_produtos: number;
  cp_subgrupos: number;
  estoquemaximo: string;
  estoqueminimo: string;
  iddeposito: number;
  idendereco: number;
  idproduto: number;
  nome: string;
  pesobruto: number;
  pesoliquido: number;
  shelflife: string;
  unidadepadrao: string;
}
