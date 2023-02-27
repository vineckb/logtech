import {apiPrivate} from '../api';


export const getUsuarios = async () => {
   try {
    const {data} = await apiPrivate.get('/usuarios');
    return data.content;
   } catch (error) {
    return error;
   }
}


interface DataType {
  idusuario: number,
  nome: string,
  login: string,
  senha: string,
  ativo: string,
  datacadastro: string,
  idsetor: number,
  idturno: number,
  email: string,
  telefone: string
}

export const createUsuarios = async (value: DataType) => {
   try {
    const {data} = await apiPrivate.post('/usuarios',
    JSON.stringify({
            idusuario: value.idusuario,
            nome: value.nome,
            login: value.login,
            senha: value.senha,
            ativo: value.ativo,
            datacadastro: value.datacadastro,
            idsetor: value.idsetor,
            idturno: value.idturno,
            email: value.email,
            telefone: value.telefone
        }));
    return data.content;
   } catch (error) {
    return error;
   }
}

