import '../../Painel/painel.css'
import './motivo.css'
import { Button, Col, Form, Input, Row, Select, theme } from 'antd';


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
        <Col span={10}>
          <Form.Item label="Bloqueio de Estoque" required tooltip="This is a required field">
              <Input size='large' style={{borderColor: '#808080', borderWidth: 1, backgroundColor: '#DDDDDD'}} />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item label="Tipo" required tooltip="This is a required field">
              <Input size='large' style={{borderColor: '#808080', borderWidth: 1, backgroundColor: '#DDDDDD'}} />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label="Status" required tooltip="This is a required field">
            <Select  size='large' style={{borderColor: '#808080', borderWidth: 1, backgroundColor: '#DDDDDD'}}
                defaultValue="---"
                onChange={handleChange}
                options={[
                  { value: '1', label: 'Ativo' },
                  { value: '2', label: 'Inativo' },
                ]}
              />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
            <Button size="large"  style={{width: '150px', fontSize: 14}} type="primary" block>NOVO</Button>
            &nbsp;  &nbsp;
            <Button size="large"  style={{width: '150px', fontSize: 14}} type="primary" block danger>CANCELAR</Button>
         </Col>
      </Row>
    </Form>
  );
};

export function CreateMotivos(){
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
            <Title title='NOVO USUÁRIO'  isOpen={isOpen} close={close}/>
            <Content isOpen={isOpen} close={close}>
              <div style={{border: '2px solid #DDDDDD', borderRadius: 6}}>
                 <AdvancedSearchForm />
              </div>
            </Content>
        </div>
    )
}