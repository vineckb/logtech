import {apiPrivate} from '../api';


export const getProdutos = async () => {
   try {
    const {data} = await apiPrivate.get('/produtos');
    return data.content;
   } catch (error) {
    return error;
   }
}

