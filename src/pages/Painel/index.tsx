import '../Painel/painel.css'
import { useState} from 'react'
import { AuthContext } from '../../contexts/auth';
import { useContext } from 'react';
import { useNavigate} from 'react-router-dom'
import { SideBar } from '../../components/SideBar';
import { Header } from '../../components/Header';
import { Content } from '../../components/Content';
import { Title } from '../../components/Title';
  
export function Painel(){
     const [isOpen,setIsOpen] = useState(true)
     const [close,setClose] = useState(false)

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
            <Title title='Painel'  isOpen={isOpen} close={close}/>
            <Content isOpen={isOpen} close={close}>
                <div className='container-grids'>
                   <div className='grid-rotinas'>
                     <div className='top-grid-rotinas'>
                        <p>Definição  de Licença</p>
                     </div>
                     <div className='conteudo-grid-rotinas'>
                        <p>Incluir</p>
                        <p>Alterar</p>
                        <p>Excluir</p>
                        <p>Permissão</p>
                     </div>
                   </div>
                   <div className='grid-rotinas'>
                     <div className='top-grid-rotinas'>
                        <p>Cadastro de ERP</p>
                     </div>
                     <div className='conteudo-grid-rotinas'>
                        <p>Incluir</p>
                        <p>Alterar</p>
                        <p>Excluir</p>
                        <p>Permissão</p>
                     </div>
                   </div>
                   <div className='grid-rotinas'>
                     <div className='top-grid-rotinas'>
                        <p>Cadastro de BD</p>
                     </div>
                     <div className='conteudo-grid-rotinas'>
                        <p>Incluir</p>
                        <p>Alterar</p>
                        <p>Excluir</p>
                        <p>Permissão</p>
                     </div>
                   </div>
                   <div className='grid-rotinas'>
                     <div className='top-grid-rotinas'>
                        <p>Conexão Cliente</p>
                     </div>
                     <div className='conteudo-grid-rotinas'>
                        <p>Incluir</p>
                        <p>Alterar</p>
                        <p>Excluir</p>
                        <p>Permissão</p>
                     </div>
                   </div>
                   <div className='grid-rotinas'>
                     <div className='top-grid-rotinas'>
                        <p>Liberação Rotina</p>
                     </div>
                     <div className='conteudo-grid-rotinas'>
                       <p>Incluir</p>
                        <p>Alterar</p>
                        <p>Excluir</p>
                        <p>Permissão</p>
                     </div>
                   </div>
                   <div className='grid-rotinas'>
                     <div className='top-grid-rotinas'>
                        <p>Permissão Filial</p>
                     </div>
                     <div className='conteudo-grid-rotinas'>
                        <p>Incluir</p>
                        <p>Alterar</p>
                        <p>Excluir</p>
                        <p>Permissão</p>
                     </div>
                   </div>
                   <div className='grid-rotinas'>
                     <div className='top-grid-rotinas'>
                        <p>Permissão  do Usuário</p>
                     </div>
                     <div className='conteudo-grid-rotinas'>
                       <p>Incluir</p>
                        <p>Alterar</p>
                        <p>Excluir</p>
                        <p>Permissão</p>
                     </div>
                   </div>
                </div>
            </Content>
        </div>
    )
}