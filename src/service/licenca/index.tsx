import {apiPrivate} from '../api';


export const getLicencas = async (cliente: any) => {
   try {
      var search = '';
      
      if(cliente !== ''){
         search = `search=cliente:${cliente}`;
      } else {
         search = '';
      }
    const {data} = await apiPrivate.get(`/licenca?${search}`);
    return data.content;
   } catch (error) {
    return error;
   }
}

