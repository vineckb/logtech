import '../Title/title.css'
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
interface TitleProps {
    title: string,
    isOpen:boolean,
    close:boolean,
    iconBack?: boolean,
}
export function Title({title,isOpen,close, iconBack}:TitleProps){
    return(
        <div className="title-lbl" style={{marginLeft:isOpen?"15.625rem":"6rem", display:close?'none':'block' }}>
         {iconBack && <Button size="large"  style={{width: '45px', fontSize: 14}} type="primary" block><ArrowLeftOutlined /></Button>}  &nbsp;   {title}
        </div>
    )
}