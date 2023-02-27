import '../../Painel/painel.css'
import './conexao.css'
import { SearchOutlined } from '@ant-design/icons';
import { Divider, Input, Table, Button, Space } from 'antd';

import { useEffect, useState } from 'react'
import { AuthContext } from '../../../contexts/auth';
import { useContext } from 'react';
import { useNavigate} from 'react-router-dom'
import { SideBar } from '../../../components/SideBar';
import { Header } from '../../../components/Header';
import { Content } from '../../../components/Content';
import { Title } from '../../../components/Title';

import type { ColumnsType } from 'antd/es/table';
import { getConexaoClientes } from '../../../service/conexaoCliente';

interface DataType {
  idconexao: number;
  idbd: number;
  nomebd: string;
  servidor: string;
  usuario: string;
  senha: string;
  ativo: string;
  iderp: string;
  tipo: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Nome do banco de dados',
    dataIndex: 'nomebd',
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
    dataIndex: 'iderp',
  },
  {
    title: 'Tipo',
    dataIndex: 'tipo',
  },
  {
    title: 'Status',
    dataIndex: 'ativo',
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
     const [data, setData] = useState<Array<DataType>>([])

    const loadData = async () => {
      const res = await getConexaoClientes()
      setData(res)
    }

    useEffect(() => {
      loadData()
    }, [])
     

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