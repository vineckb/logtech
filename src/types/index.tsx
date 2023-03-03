export interface PermissoesDTO {
   ativo: string;
   descricao: string;
   idfuncionalidade: number;
   idrotina: number;
   ordem: number;
 }

export interface RotinasDTO {
   ativo: string;
   idaplicacao: number;
   idmenu: number;
   idrotina: number
   idtiporotina: number;
   nomerotina: string;
   ordem: number;
   permissao: Array<PermissoesDTO>
}