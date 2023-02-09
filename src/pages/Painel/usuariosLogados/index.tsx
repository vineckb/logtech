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
  data_hora_login: string;
  data_hora_logoff: string;
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
    title: 'Data Hora do Login',
    dataIndex: 'data_hora_login',
  },
  {
    title: 'Data Hora do Logoff',
    dataIndex: 'data_hora_logoff',
  }
];

const data: DataType[] = [
  {
    key: '1',
    nome: 'Joaquim Leopoudo',
    login: 'Joaquim',
    data_hora_login: '27/01/2023',
    data_hora_logoff: '27/01/2023',
  },
  {
    key: '2',
    nome: 'Joaquim Leopoudo',
    login: 'Joaquim',
    data_hora_login: '27/01/2023',
    data_hora_logoff: '27/01/2023',
  },
  {
    key: '3',
    nome: 'Joaquim Leopoudo',
    login: 'Joaquim',
    data_hora_login: '27/01/2023',
    data_hora_logoff: '27/01/2023',
  },
  {
    key: '4',
    nome: 'Joaquim Leopoudo',
    login: 'Joaquim',
    data_hora_login: '27/01/2023',
    data_hora_logoff: '27/01/2023',
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

export function UsersLogados(){
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
            <Title title='CONSULTA USUÁRIOS LOGADOS'  isOpen={isOpen} close={close}/>
            <Content isOpen={isOpen} close={close}>
               <div>
                    <div className='container-filter-table'>
                        <div className='grid-input-filter-table'>
                          <Input size="large" placeholder="Pesquisar" prefix={<SearchOutlined />} />
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