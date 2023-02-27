import '../../Painel/painel.css'
import './usuarios.css'
import { Button, Col, Form, Input, Row, Select, theme } from 'antd';


import { useState } from 'react'
import { AuthContext } from '../../../contexts/auth';
import { useContext } from 'react';
import { useNavigate} from 'react-router-dom'
import { SideBar } from '../../../components/SideBar';
import { Header } from '../../../components/Header';
import { Content } from '../../../components/Content';
import { Title } from '../../../components/Title';
import { createUsuarios } from '../../../service/usuarios';

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
    createUsuarios(values)
   // navigate('/configuracao/usuarios')
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form 
    form={form} 
    name="advanced_search"  
    layout="vertical" 
    style={formStyle}  
    initialValues={{ remember: true }}
    onFinish={onFinish} 
    onFinishFailed={onFinishFailed}
    autoComplete="off" 
    >
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item label="Nome" name="nome" required tooltip="Campo Obrigatório" rules={[{ required: true, message:'Por favor, insira o nome! ' }]}>
              <Input size='large' style={{borderColor: '#808080', borderWidth: 1, backgroundColor: '#DDDDDD'}} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Login" name="login" required tooltip="Campo Obrigatório" rules={[{ required: true, message:'Por favor, insira o login! ' }]}>
              <Input size='large' style={{borderColor: '#808080', borderWidth: 1, backgroundColor: '#DDDDDD'}} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Senha" name="senha" required tooltip="Campo Obrigatório" rules={[{ required: true, message:'Por favor, insira o senha! ' }]}>
              <Input size='large' style={{borderColor: '#808080', borderWidth: 1, backgroundColor: '#DDDDDD'}} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item label="E-mail" name="email" required tooltip="Campo Obrigatório" rules={[{ required: true, message:'Por favor, insira o e-mail! ' }]}>
              <Input size='large' style={{borderColor: '#808080', borderWidth: 1, backgroundColor: '#DDDDDD'}} />
          </Form.Item>
        </Col>
        <Col span={7}>
          <Form.Item label="Telefone" name="telefone" required tooltip="Campo Obrigatório" rules={[{ required: true, message:'Por favor, insira o Telefone! ' }]}>
              <Input size='large' style={{borderColor: '#808080', borderWidth: 1, backgroundColor: '#DDDDDD'}} />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label="Status" name="ativo" required tooltip="Campo Obrigatório" rules={[{ required: true, message:'Por favor, insira o Status! ' }]}>
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
            <Button htmlType="submit" size="large"  style={{width: '150px', fontSize: 14}} type="primary" block>NOVO</Button>
            &nbsp;  &nbsp;
            <Button size="large"  style={{width: '150px', fontSize: 14}} type="primary" block danger>CANCELAR</Button>
         </Col>
      </Row>
    </Form>
  );
};

export function CreateUsers(){
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