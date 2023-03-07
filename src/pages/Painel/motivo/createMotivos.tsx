import '../../Painel/painel.css'
import './motivo.css'
import { Button, Col, Form, Input, Row, Select, theme } from 'antd';
import { toast } from 'react-toastify';

import { useEffect, useState } from 'react'
import { AuthContext } from '../../../contexts/auth';
import { useContext } from 'react';
import { useNavigate} from 'react-router-dom'
import { SideBar } from '../../../components/SideBar';
import { Header } from '../../../components/Header';
import { Content } from '../../../components/Content';
import { Title } from '../../../components/Title';
import { createMotivos, getTipoMotivos } from '../../../service/motivos';

const AdvancedSearchForm = () => {
  const { token } = theme.useToken();
  const [form] = Form.useForm();
   const navigate = useNavigate()
   const [tipoMotivos, setTipoMotivos] = useState<Array<TipoMotivoDTO>>([])

  const loadMotivos = async () => {
   const res = await getTipoMotivos();
   setTipoMotivos(res);
  }

  useEffect(() => {
    loadMotivos()
  }, [])
     
  
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
    createMotivos(values)
    form.setFieldValue('bloqestoque', '')
    form.setFieldValue('status', '')
    form.setFieldValue('idtipomotivo', '')
    toast.success('Usuário cadastrado')
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
          <Form.Item label="Bloq Estoque" name="bloqestoque" required tooltip="Campo Obrigatório" rules={[{ required: true, message:'Por favor, insira o Bloq Estoque! ' }]}>
              <Input size='large' style={{borderColor: '#808080', borderWidth: 1, backgroundColor: '#DDDDDD'}} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Status" name="status" required tooltip="Campo Obrigatório" rules={[{ required: true, message:'Por favor, insira o Status! ' }]}>
              <Input size='large' style={{borderColor: '#808080', borderWidth: 1, backgroundColor: '#DDDDDD'}} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Tipo de motivo" name="idtipomotivo" required tooltip="Campo Obrigatório" rules={[{ required: true, message:'Por favor, insira o Tipo de motivo! ' }]}>
            <Select  size='large' style={{borderColor: '#808080', borderWidth: 1, backgroundColor: '#DDDDDD'}}
                defaultValue="---"
                onChange={handleChange}
                options={[
                  { value: '1', label: 'Teste' },
                ]}
              />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
            <Button htmlType="submit" size="large"  style={{width: '150px', fontSize: 14}} type="primary" block>NOVO</Button>
            &nbsp;  &nbsp;
            <Button size="large" onClick={() =>navigate('/painel/motivo')}  style={{width: '150px', fontSize: 14}} type="primary" block danger>CANCELAR</Button>
         </Col>
      </Row>
    </Form>
  );
};


interface TipoMotivoDTO {
  idtipomotivo: number;
  nome: string;
}

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
            <Title title='NOVO MOTIVO'  isOpen={isOpen} close={close}/>
            <Content isOpen={isOpen} close={close}>
              <div style={{border: '2px solid #DDDDDD', borderRadius: 6}}>
                 <AdvancedSearchForm />
              </div>
            </Content>
        </div>
    )
}