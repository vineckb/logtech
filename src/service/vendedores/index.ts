import {apiPrivate} from '../api';


export const getVendedores = async () => {
   try {
    const {data} = await apiPrivate.get('/vendedores');
    return data.content;
   } catch (error) {
    return error;
   }
}

