import {apiPrivate} from '../api';


export const getVeiculosTransportadoras = async () => {
   try {
    const {data} = await apiPrivate.get('/transportadorasveiculos');
    return data.content;
   } catch (error) {
    return error;
   }
}

