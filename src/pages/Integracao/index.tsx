import '../Dashboard/dashboard.css'
import { useState} from 'react'
import { AuthContext } from '../../contexts/auth';
import { useContext } from 'react';
import { useNavigate} from 'react-router-dom'
import { SideBar } from '../../components/SideBar';
import { Header } from '../../components/Header';
import { Content } from '../../components/Content';
import { Title } from '../../components/Title';
  
export function Integracao(){
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
            <Title title='Integracao'  isOpen={isOpen} close={close}/>
            <Content isOpen={isOpen} close={close}>
                <>
                 <div><h1>Integracao</h1></div>
                </>
            </Content>
        </div>
    )
}