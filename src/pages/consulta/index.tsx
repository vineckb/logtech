import '../Painel/painel.css'
import { useEffect, useState} from 'react'
import { AuthContext } from '../../contexts/auth';
import { useContext } from 'react';
import { useNavigate} from 'react-router-dom'
import { SideBar } from '../../components/SideBar';
import { Header } from '../../components/Header';
import { Content } from '../../components/Content';
import { Title } from '../../components/Title';

import {getRotinasIdmenu} from '../../service/rotinas'
import { getPermissoesIdRotina } from '../../service/permissoes';

interface RotinasDTO {
   ativo: string;
   idaplicacao: number;
   idmenu: number;
   idrotina: number
   idtiporotina: number;
   nomerotina: string;
   ordem: number;
}

interface PermissoesDTO {
   idpermissao: number;
   idrotina: number;
   idfuncionalidade: number;
   idusuario: number;
   dataliberacao: string;
   idusuarioliberacao: number;
   ativo: string;
}

export function Consulta(){
     const [isOpen,setIsOpen] = useState(true)
     const [close,setClose] = useState(false)
     const [rotinas, setRotinas] = useState<Array<RotinasDTO>>([])
     const [permissoes, setPermissoes] = useState<Array<PermissoesDTO>>([])

     const loadRotinas = async () => {
      const dados = await getRotinasIdmenu(9);   
      setRotinas(dados)
     }

     const perrmissoesIdRotina = async (idrotinaParam : number) => {
        const res = await getPermissoesIdRotina(idrotinaParam);
        setPermissoes(res);
      }

     useEffect(() => {
      loadRotinas();
     }, [])

    function openMenu() {
        setIsOpen(!isOpen)
        setClose(false)    
    }
    function closeMenu(){
        setClose(!close)
        setIsOpen(false)
    }
 
    const {user,signed} = useContext(AuthContext)
    const navigate = useNavigate()
    if(!signed){
        navigate('/')
    }
    return(
        <div className='container-dashboard'>
            <SideBar isOpen={isOpen} closeMenu={closeMenu} close={close} />
            <Header openMenu={openMenu} isOpen={isOpen} close={close} />
            <Title title='Consulta'  isOpen={isOpen} close={close}/>
            <Content isOpen={isOpen} close={close}>
                <div className='container-grids'>
                  {
                     rotinas.length > 0 ?
                     rotinas.map((item) => {
                        //perrmissoesIdRotina(item.idrotina);
                        return (
                            <div className='grid-rotinas'>
                              <div className='top-grid-rotinas'>
                                 <p>{item.nomerotina}</p>
                              </div>
                             
                           </div>
                        )
                     })
                     :
                     <p>loading</p>
                  }
                </div>
            </Content>
        </div>
    )
}