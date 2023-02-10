import {apiPrivate} from '../api';


export const getSubGrupos = async () => {
   try {
    const {data} = await apiPrivate.get('/subgrupos');
    return data.content;
   } catch (error) {
    return error;
   }
}

