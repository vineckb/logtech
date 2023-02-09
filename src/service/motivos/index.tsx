import {apiPrivate} from '../api';


export const getMotivos = async () => {
   try {
    const {data} = await apiPrivate.get('/motivos');
    return data.content;
   } catch (error) {
    return error;
   }
}

