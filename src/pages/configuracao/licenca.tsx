import '../Painel/painel.css'
import './licenca.css'
import { SearchOutlined } from '@ant-design/icons';
import { Divider, Input, Table, Button, Space } from 'antd';

import { useState } from 'react'
import { AuthContext } from '../../contexts/auth';
import { useContext } from 'react';
import { useNavigate} from 'react-router-dom'
import { SideBar } from '../../components/SideBar';
import { Header } from '../../components/Header';
import { Content } from '../../components/Content';
import { Title } from '../../components/Title';

import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: React.Key;
  cnpj: string;
  cliente: string;
  qt_usuarios: number;
  data_liberacao: string;
  chave: string;
  status: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Cnpj',
    dataIndex: 'cnpj',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Cliente',
    dataIndex: 'cliente',
  },
  {
    title: 'Qtde Usúarios',
    dataIndex: 'qt_usuarios',
  },
  {
    title: 'Data Liberação',
    dataIndex: 'data_liberacao',
  },
  {
    title: 'Chave',
    dataIndex: 'chave',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];

const data: DataType[] = [
  {
    key: '1',
    cnpj: '12.345.678/0001-99',
    cliente: 'Camargo e Camargo',
    qt_usuarios: 50,
    data_liberacao: '27/01/2023',
    chave: '656565656565656',
    status: 'Ativo'
  },
  {
    key: '2',
    cnpj: '12.345.678/0001-99',
    cliente: 'Camargo e Camargo',
    qt_usuarios: 50,
    data_liberacao: '27/01/2023',
    chave: '656565656565656',
    status: 'Ativo'
  },
  {
    key: '3',
    cnpj: '12.345.678/0001-99',
    cliente: 'Camargo e Camargo',
    qt_usuarios: 50,
    data_liberacao: '27/01/2023',
    chave: '656565656565656',
    status: 'Ativo'
  },
  {
    key: '4',
    cnpj: '12.345.678/0001-99',
    cliente: 'Camargo e Camargo',
    qt_usuarios: 50,
    data_liberacao: '27/01/2023',
    chave: '656565656565656',
    status: 'Ativo'
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.cnpj === '', // Column configuration not to be checked
    name: record.cnpj,
  }),
};

export function Licenca(){
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
            <Title title='DEFINIÇÃO DE LICENÇA'  isOpen={isOpen} close={close}/>
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