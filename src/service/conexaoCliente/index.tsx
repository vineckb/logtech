import {apiPrivate} from '../api';


export const getConexaoClientes = async () => {
   try {
    const {data} = await apiPrivate.get('/conexaocliente');
    return data.content;
   } catch (error) {
    return error;
   }
}

