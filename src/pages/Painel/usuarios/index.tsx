import '../../Painel/painel.css'
import '../../configuracao/licenca.css'
import { SearchOutlined } from '@ant-design/icons';
import { Divider, Input, Table, Button, Space } from 'antd';

import { useState } from 'react'
import { AuthContext } from '../../../contexts/auth';
import { useContext } from 'react';
import { useNavigate} from 'react-router-dom'
import { SideBar } from '../../../components/SideBar';
import { Header } from '../../../components/Header';
import { Content } from '../../../components/Content';
import { Title } from '../../../components/Title';

import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: React.Key;
  nome: string;
  login: string;
  data_cadastro: string;
  email: string;
  cpf: string;
  telefone: string;
  status: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Nome',
    dataIndex: 'nome',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Login',
    dataIndex: 'login',
  },
  {
    title: 'Data Cadastro',
    dataIndex: 'data_cadastro',
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
  },
  {
    title: 'Cpf',
    dataIndex: 'cpf',
  },
  {
    title: 'Telefone',
    dataIndex: 'telefone',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];

const data: DataType[] = [
  {
    key: '1',
    nome: 'Joaquim Leopoudo',
    login: 'Joaquim',
    data_cadastro: '27/01/2023',
    email: 'joaquim@email.com',
    cpf: '656565656565656',
    telefone: '27996451756',
    status: 'Ativo'
  },
  {
    key: '2',
    nome: 'Joaquim Leopoudo',
    login: 'Joaquim',
    data_cadastro: '27/01/2023',
    email: 'joaquim@email.com',
    cpf: '656565656565656',
    telefone: '27996451756',
    status: 'Ativo'
  },
  {
    key: '3',
    nome: 'Joaquim Leopoudo',
    login: 'Joaquim',
    data_cadastro: '27/01/2023',
    email: 'joaquim@email.com',
    cpf: '656565656565656',
    telefone: '27996451756',
    status: 'Ativo'
  },
  {
    key: '4',
    nome: 'Joaquim Leopoudo',
    login: 'Joaquim',
    data_cadastro: '27/01/2023',
    email: 'joaquim@email.com',
    cpf: '656565656565656',
    telefone: '27996451756',
    status: 'Ativo'
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.nome === '', // Column configuration not to be checked
    name: record.nome,
  }),
};

export function Users(){
     const [isOpen,setIsOpen] = useState(true)
     const [close,setClose] = useState(false)
     

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
            <Title title='USUÀRIOS'  isOpen={isOpen} close={close}/>
            <Content isOpen={isOpen} close={close}>
               <div>
                    <div className='container-filter-table'>
                        <div className='grid-input-filter-table'>
                          <Input size="large" placeholder="Pesquisar" prefix={<SearchOutlined />} />
                        </div>
                        <div className='grid-input-filter-table'>
                          <Space wrap style={{ width: '100%', justifyContent: 'flex-end'}}>
                            <Button size="large"  style={{width: '150px', fontSize: 14}} type="primary" block>NOVO</Button>
                            <Button size="large"  style={{width: '150px', fontSize: 14}} type="primary" block danger>EXCLUIR</Button>
                          </Space>
                        </div>
                    </div>
                    <Divider />

                    <Table
                        rowSelection={{
                        type: "checkbox",
                        ...rowSelection,
                        }}
                        columns={columns}
                        dataSource={data}
                    />
                    </div>
            </Content>
        </div>
    )
}