import '../../Painel/painel.css'
import './motivo.css'
import { Button, Col, Form, Input, Row, theme } from 'antd';


import { useState } from 'react'
import { AuthContext } from '../../../contexts/auth';
import { useContext } from 'react';
import { useNavigate} from 'react-router-dom'
import { SideBar } from '../../../components/SideBar';
import { Header } from '../../../components/Header';
import { Content } from '../../../components/Content';
import { Title } from '../../../components/Title';

const AdvancedSearchForm = () => {
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  
  const formStyle = {
    maxWidth: 'none',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    padding: 24,
  };

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form form={form} name="advanced_search"  layout="vertical" style={formStyle}  onFinish={onFinish} >
      <Row gutter={24}>
        <Col span={18}>
          <Form.Item label="Descricao" required tooltip="This is a required field">
              <Input size='large' style={{borderColor: '#808080', borderWidth: 1, backgroundColor: '#DDDDDD'}} />
          </Form.Item>
        </Col>
         <Col span={6} style={{ textAlign: 'right' }}>
            <Button size="large"  style={{width: '150px', fontSize: 14}} type="primary" block>CRIAR</Button>
            &nbsp;  &nbsp;
            <Button size="large"  style={{width: '150px', fontSize: 14}} type="primary" block danger>EXCLUIR</Button>
         </Col>
      </Row>
    </Form>
  );
};

export function CreateTipoMotivos(){
    const { token } = theme.useToken();
    const [isOpen,setIsOpen] = useState(true)
    const [close,setClose] = useState(false)

  const listStyle: React.CSSProperties = {
    lineHeight: '200px',
    textAlign: 'center',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    marginTop: 16,
  };
     

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
             <Title iconBack={true} title='TIPO DE MOTIVO'  isOpen={isOpen} close={close}/>
            <Content isOpen={isOpen} close={close}>
              <div style={{border: '2px solid #DDDDDD', borderRadius: 6}}>
                 <AdvancedSearchForm />
              </div>
            </Content>
        </div>
    )
}