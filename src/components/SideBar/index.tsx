import '../SideBar/sidebar.css'
import logo from '../../assets/logo-white.svg';
import { FaDashcube,FaTruck,FaChartLine,FaList,FaPlus,FaTable,FaChartPie,FaIndustry } from "react-icons/fa";
import { Link } from 'react-router-dom';

interface SideBarProps {
    isOpen : boolean,
    close: boolean,
    closeMenu: ()=> void
}

export function SideBar({isOpen,closeMenu,close}:SideBarProps){

   let size = 16
    if(!isOpen){
        size = 24
    }
    
 
    if(!close){
        return <div className='sidebar' style={{width:isOpen?"230px":"80px", display:close?'none':'block' }}>
        <button className='btnClose' onClick={() => closeMenu()}>X</button>
        <div className='logo-container-header'>
           <img src={logo} alt="Logo SideBar Menu" className='logo' />
           <span className='sidebar-menu-label'>Menu</span>
       </div>
   
     
       <ul className='menu'>
           <li><Link to='/dashboard' ><FaChartLine size={size} onClick={()=>closeMenu()}/> {isOpen?'Dashboard':''}</Link>  </li>
           <li><Link to='/integracao'><FaTable size={size} /> {isOpen?'Integração':''}</Link></li>
           <li><Link to='/cadastro'><FaPlus size={size} />{isOpen?'Cadastro':''}</Link></li>
           <li><Link to='/entradas'><FaChartPie size={size} />{isOpen?'Entradas':''}</Link> </li>
           <li><Link to='/movimentacao'><FaTruck size={size} />{isOpen?'Movimentação':''}</Link> </li>
           <li><Link to='/invetario'><FaList size={size} />{isOpen?'Inventário':''}</Link> </li>
           <li><Link to='/gestao'><FaIndustry size={size} />{isOpen?'Gestão':''}</Link> </li>     
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
                    <li><Link to='/integracao'><FaDashcube size={size} /> Integração</Link></li>
                    <li><Link to='/cadastro'><FaDashcube size={size} />Cadastro</Link></li>
                    <li><Link to='/entradas'><FaDashcube size={size} /> Entradas </Link> </li>
                    <li><Link to='/movimentacao'><FaDashcube size={size} /> Movimentação </Link> </li>
                    <li><Link to='/invetario'><FaDashcube size={size} /> Inventário </Link> </li>
                    <li><Link to='/gestao'><FaDashcube size={size} /> Gestão </Link> </li>     
                </ul>

                <span className='sidebar-footer-label-min'>Versâo 1.0.2</span>
            </div>
        )

    }

   
}
