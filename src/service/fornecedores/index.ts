import {apiPrivate} from '../api';


export const getFornecedores = async () => {
   try {
    const {data} = await apiPrivate.get('/fornecedores');
    return data.content;
   } catch (error) {
    return error;
   }
}

