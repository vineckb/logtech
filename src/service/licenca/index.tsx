import {apiPrivate} from '../api';


export const getLicencas = async () => {
   try {
    const {data} = await apiPrivate.get('/licenca');
    return data.content;
   } catch (error) {
    return error;
   }
}

