
import './content.css'
type ContentProps ={
    children:JSX.Element,
    isOpen:boolean,
    close:boolean,}
export function Content({children,isOpen,close}:ContentProps) {
    return(
      <div className='container-content' style={{marginLeft:isOpen?"15.625rem":"6rem", display:close?'none':'block' }}> 
        {children}
      </div>
    )
}