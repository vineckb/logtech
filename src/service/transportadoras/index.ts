import {apiPrivate} from '../api';


export const getTransportadoras = async () => {
   try {
    const {data} = await apiPrivate.get('/transportadoras');
    return data.content;
   } catch (error) {
    return error;
   }
}

