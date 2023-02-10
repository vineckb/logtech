import {apiPrivate} from '../api';


export const getClienteRotas = async () => {
   try {
    const {data} = await apiPrivate.get('/clientesrotas');
    return data.content;
   } catch (error) {
    return error;
   }
}

