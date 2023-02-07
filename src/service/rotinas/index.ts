import {apiPrivate} from '../api';


export const getRotinas = async () => {
   try {
    const {data} = await apiPrivate.get('/rotinas');
    return data.content;
   } catch (error) {
    return error;
   }
}


export const getRotinasIdmenu = async (idmenu: number) => {
    try {
    const {data} = await apiPrivate.get(`/menu/${idmenu}?method=SelecionarRotinas`);
    return data.content;
   } catch (error) {
    return error;
   }
}