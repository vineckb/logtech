import {apiPrivate} from '../api';


export const getRotinas = async () => {
   try {
    const {data} = await apiPrivate.get('/rotinas');
    return data.content;
   } catch (error) {
    return error;
   }
}


export const getRotinasId = async () => {
   try {
    const {data} = await apiPrivate.get(`/rotinas?search=idmenu:10&idaplicacao:2`);
    const dados = data.content;
    await data.content.map( async (i: any, index: number) => {
      const res = apiPrivate.get(`/funcionalidades?search=idfuncionalidade:28`);
      dados[index]['permissoes'] = (await res).data.content;
    })
    return dados;
   } catch (error) {
    return error;
   }
}



export const getRotinasIdmenu = async (idmenu: number) => {
   try {
    const {data} = await apiPrivate.get(`/menu/${idmenu}?method=SelecionarRotinas`);
    const dados = await data.content;
    console.log(dados)
    return dados;
   } catch (error) {
    return error;
   }
   /* try {
    const {data} = await apiPrivate.get(`/menu/${idmenu}?method=SelecionarRotinas`);
    //const res = await data.content.map((i: any) => i.permissao.map((item: any) => apiPrivate.get(`/funcionalidades?search=idfuncionalidade:${item.idfuncionalidade}`)))
    return data.content;
   } catch (error) {
    return error;
   } */
}



export const getFuncionalidade = async (idfuncionalidade: number) => {
    try {
    const {data} = await apiPrivate.get(`/funcionalidades?search=idfuncionalidade:${idfuncionalidade}`);
    return data.content[0];
   } catch (error) {
    return error;
   }
}