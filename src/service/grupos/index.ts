import {apiPrivate} from '../api';


export const getGrupos = async () => {
   try {
    const {data} = await apiPrivate.get('/grupos');
    return data.content;
   } catch (error) {
    return error;
   }
}

