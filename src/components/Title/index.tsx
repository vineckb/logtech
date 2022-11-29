import '../Title/title.css'
interface TitleProps {
    title: string,
    isOpen:boolean,
    close:boolean,
}
export function Title({title,isOpen,close}:TitleProps){
    return(
        <div className="title-lbl" style={{marginLeft:isOpen?"15.625rem":"6rem", display:close?'none':'block' }}>
            {title}
        </div>
    )
}