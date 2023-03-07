import {apiPrivate} from '../api';


export const getMotivos = async () => {
   try {
    const {data} = await apiPrivate.get('/motivos');
    return data.content;
   } catch (error) {
    return error;
   }
}

export const getTipoMotivos = async () => {
   try {
    const {data} = await apiPrivate.get('/tipomotivo');
    return data.content;
   } catch (error) {
    return error;
   }
}


interface DataType {
   idtipomotivo: number,
   status: string,
   bloqestoque: string
}

export const createMotivos = async (value: DataType) => {
   try {
    const {data} = await apiPrivate.post('/motivos',
    JSON.stringify({
            idtipomotivo: value.idtipomotivo,
            status: value.status,
            bloqestoque: value.bloqestoque
        }));
    return data.content;
   } catch (error) {
    return error;
   }
}

