 
    
    import '../Header/header.css'
    import { FaBars } from "react-icons/fa";

    interface HeaderProps{
        openMenu: () => void
        isOpen: boolean,
        close:boolean
    }
    
    export function Header({isOpen,close,openMenu}:HeaderProps) {
        return(
            <div className='container-header' style={{marginLeft:isOpen?"230px":"80px", display:close?'none':'block' }}> 
            <span className="font-size:30px;cursor:pointer" onClick={()=> openMenu()}><FaBars size={24} /></span>
            </div>    
        )
    }
 