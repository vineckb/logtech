import {apiPrivate} from '../api';


export const getPermissoesIdRotina = async (idrotina: number) => {
   try {
    const {data} = await apiPrivate.get(`/permissao?search=idrotina:${idrotina}`);
    return data.content;
   } catch (error) {
    return error;
   }
}