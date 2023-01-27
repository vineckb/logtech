import {apiPrivate} from '../api';


export const getRotinas = async () => {
   try {
    const {data} = await apiPrivate.get('/rotinas');
    return data.content;
   } catch (error) {
    return error;
   }
}