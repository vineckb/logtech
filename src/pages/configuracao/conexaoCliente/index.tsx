import '../../Painel/painel.css'
import './conexao.css'
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
  nome_banco_de_dados: string;
  servidor: string;
  usuario: string;
  senha: string;
  id_erp: string;
  tipo: string;
  status: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Nome do banco de dados',
    dataIndex: 'nome_banco_de_dados',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Servidor',
    dataIndex: 'servidor',
  },
  {
    title: 'Usuário',
    dataIndex: 'usuario',
  },
  {
    title: 'Senha',
    dataIndex: 'senha',
  },
  {
    title: 'ID ERP',
    dataIndex: 'id_erp',
  },
  {
    title: 'Tipo',
    dataIndex: 'tipo',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];

const data: DataType[] = [
  {
    key: '1',
    nome_banco_de_dados: 'matriz',
    servidor: '200.145.51.1',
    usuario: 'root',
    id_erp: '213123123',
    senha: '656565656565656',
    tipo: 'Linux',
    status: 'Ativo'
  },
  {
    key: '2',
    nome_banco_de_dados: 'matriz',
    servidor: '200.145.51.1',
    usuario: 'root',
    id_erp: '213123123',
    senha: '656565656565656',
    tipo: 'Linux',
    status: 'Ativo'
  },
  {
    key: '3',
    nome_banco_de_dados: 'matriz',
    servidor: '200.145.51.1',
    usuario: 'root',
    id_erp: '213123123',
    senha: '656565656565656',
    tipo: 'Linux',
    status: 'Ativo'
  },
  {
    key: '4',
    nome_banco_de_dados: 'matriz',
    servidor: '200.145.51.1',
    usuario: 'root',
    id_erp: '213123123',
    senha: '656565656565656',
    tipo: 'Linux',
    status: 'Ativo'
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.servidor === '', // Column configuration not to be checked
    name: record.servidor,
  }),
};

export function ConexaoCliente(){
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
            <Title title='CONEXÃO CLIENTE'  isOpen={isOpen} close={close}/>
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