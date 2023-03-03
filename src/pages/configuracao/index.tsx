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
import { Button } from 'antd';
import { RotinasDTO } from '../../types';


export function Configuracao(){
     const [isOpen,setIsOpen] = useState(true)
     const [close,setClose] = useState(false)
     const [rotinas, setRotinas] = useState<Array<RotinasDTO>>([])

     const loadRotinas = async () => {
       const dados = await getRotinasIdmenu(1);   
      console.log('hu',dados)
      setRotinas(dados)
     }

      const handleSub = (nome: string) => {
        if(nome === 'Conexão Cliente') {
         navigate('/configuracao/conexao-cliente')
        }
        if(nome === 'Cadastro de Usuario') {
         navigate('/configuracao/usuarios')
        }
        if(nome === 'Permissão do Usuario') {
         navigate('/configuracao/usuarios')
        }
        if(nome === 'Permissão da Filial') {
         navigate('/configuracao/usuarios')
        }
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
            <Title title='Configações'  isOpen={isOpen} close={close}/>
            <Content isOpen={isOpen} close={close}>
                <div className='container-grids'>
                  {
                     rotinas.length > 0 ?
                     rotinas.map((item) => {
                        //perrmissoesIdRotina(item.idrotina);
                        return (
                            <div className='grid-rotinas'>
                              <div className='top-grid-rotinas'>
                                <Button size="large" onClick={() => handleSub(item.nomerotina)}  style={{width: '150px', fontSize: 14}} type="link" block><p className='top-grid-rotinas-p'>{item.nomerotina}</p></Button>
                              </div>

                              <div className="grid-permissoes"> 
                                {
                                    item.permissao ?
                                    item?.permissao.length > 0 ?
                                    item.permissao.map((i) => {
                                        return (<p>{i.descricao}</p>)
                                    })
                                    : <p>Sem permissao</p>
                                    : <p>Sem permissao</p>
                                }
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