import {apiPrivate} from '../api';


export const getRegioes = async () => {
   try {
    const {data} = await apiPrivate.get('/clientesregioes');
    return data.content;
   } catch (error) {
    return error;
   }
}

