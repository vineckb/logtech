import '../SideBar/sidebar.css'
import logo from '../../assets/logo-white.svg';
import { FaDashcube,FaTruck,FaChartLine,FaList,FaPlus,FaTable,FaChartPie,FaIndustry } from "react-icons/fa";
import { Link } from 'react-router-dom';
import menu_list from './sidebar_mock';
import { useEffect, useState } from 'react';

interface SideBarProps {
    isOpen : boolean,
    close: boolean,
    closeMenu: () => void
}

interface MenuItem {
    idmenu: number,
    nomemenu: string,
    ordem: number,
    ativo: string
}

export function SideBar({isOpen,closeMenu,close}:SideBarProps){
const [listaDeMenu,setListaDeMenu] = useState<MenuItem[]>()
   let size = 16
    if(!isOpen){
        size = 24
    }


    useEffect(() =>{

        setListaDeMenu(menu_list.content)
   
        listaDeMenu?.map((item) =>(
            console.log(item.nomemenu)
        ))
    

    },[])
   
    if(!close){
        return <div className='sidebar' style={{width:isOpen?"230px":"80px", display:close?'none':'block' }}>
        <button className='btnClose' onClick={() => closeMenu()}>X</button>
        <div className='logo-container-header'>
           <img src={logo} alt="Logo SideBar Menu" className='logo' />
           <span className='sidebar-menu-label'>Menu</span>
       </div>

       <ul className='menu'>
           { listaDeMenu?.map((item:MenuItem) => ItemMenu(item)) }    
       </ul>
     

       <span className='sidebar-footer-label'>Versâo 1.0.2</span> 
   </div>
    }else{

        return( 
            <div className='sidebar mobile' style={{display:close?'none':'block' }}>
                 <button className='btnClose' onClick={() => closeMenu()}>X</button>
                 <div className='logo-container-header'>
                    <img src={logo} alt="Logo SideBar Menu" className='logo' />
                    <span className='sidebar-menu-label'>Menu</span>
                </div>
                          
                <ul className='menu'>
                    <li><Link to='/dashboard' className='active'><FaDashcube size={size} />Dashboard</Link>  </li>
                     {listaDeMenu?.map((item)=> ItemMenuMobile(item))}   
                </ul>

                <span className='sidebar-footer-label-min'>Versâo 1.0.2</span>
            </div>
        )

    }

    function ItemMenuMobile(item: MenuItem) {

        if(item.idmenu == 1){
            <li><Link to='/integracao'><FaDashcube size={size} /> Integração</Link></li>
        }

        if(item.idmenu == 2){
            return <li><Link to='/cadastro'><FaDashcube size={size} />Cadastro</Link></li>
        }

        if(item.idmenu == 3){
            return <li><Link to='/entradas'><FaDashcube size={size} /> Entradas </Link> </li>

        }

        if(item.idmenu == 4){
            return <li><Link to='/movimentacao'><FaDashcube size={size} /> Movimentação </Link> </li>

        }

        if(item.idmenu == 5){
            return <li><Link to='/invetario'><FaDashcube size={size} /> Inventário </Link> </li>
        }

        if(item.idmenu == 6){
           return <li><Link to='/gestao'><FaDashcube size={size} /> Gestão </Link> </li>
        }
    }
    
    function ItemMenu(item : MenuItem){
   
        if(item.idmenu == 1){
            return <li><Link to='/configuracao'><FaTable size={size} /> {isOpen?item.nomemenu:''}</Link></li>
        }
      
        if(item.idmenu == 2){
            return <li><Link to='/painel' ><FaChartLine size={size} onClick={()=>closeMenu()}/> {isOpen?item.nomemenu:''}</Link></li>
        }

        if(item.idmenu == 3){
            return <li><Link to='/entradas'><FaChartPie size={size} />{isOpen?item.nomemenu:''}</Link> </li>
        }

        if(item.idmenu == 4){
            return <li><Link to='/movimentacao'><FaTruck size={size} />{isOpen?item.nomemenu:''}</Link> </li>
        }

        if(item.idmenu == 5){
            return <li><Link to='/expedicao'><FaList size={size} />{isOpen?item.nomemenu:''}</Link> </li>
        }

        if(item.idmenu == 6){
            return <li><Link to='/auditoria'><FaList size={size} />{isOpen?item.nomemenu:''}</Link> </li>
        }

        if(item.idmenu == 7){
            return <li><Link to='/gestao'><FaIndustry size={size} />{isOpen?item.nomemenu:''}</Link> </li> 
        }

     
        if(item.idmenu == 8){
            return <li><Link to='/cadastro'><FaPlus size={size} />{isOpen?'Cadastro':''}</Link></li>
        }


        if(item.idmenu == 9){
            return <li><Link to='/consulta'><FaList size={size} />{isOpen?item.nomemenu:''}</Link> </li>
        }

        if(item.idmenu == 10){
            return <li><Link to='/recepcao'><FaList size={size} />{isOpen?item.nomemenu:''}</Link> </li>
        }
        
    }
   
}
