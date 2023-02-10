import {apiPrivate} from '../api';


export const getClientes = async () => {
   try {
    const {data} = await apiPrivate.get('/clientes');
    return data.content;
   } catch (error) {
    return error;
   }
}

