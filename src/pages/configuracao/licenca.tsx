import '../Painel/painel.css'
import './licenca.css'
import { SearchOutlined } from '@ant-design/icons';
import { Divider, Input, Table, Button, Space } from 'antd';

import { useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/auth';
import { useContext } from 'react';
import { useNavigate} from 'react-router-dom'
import { SideBar } from '../../components/SideBar';
import { Header } from '../../components/Header';
import { Content } from '../../components/Content';
import { Title } from '../../components/Title';

import type { ColumnsType } from 'antd/es/table';
import { getLicencas } from '../../service/licenca';

interface DataType {
  idlicenca: number;
  cnpj: any;
  cliente: string;
  qtd_usuarios: number;
  dataliberacao: string;
  chave: string;
  ativo: any;
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
    dataIndex: 'qtd_usuarios',
  },
  {
    title: 'Data Liberação',
    dataIndex: 'dataliberacao',
  },
  {
    title: 'Chave',
    dataIndex: 'chave',
  },
  {
    title: 'Ativo',
    dataIndex: 'ativo',
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
     const [data, setData] = useState<Array<DataType>>([])

     const loadDatas = async () => {
      const res = await getLicencas()
      setData(res); 
    }
     
     useEffect(() => {
       loadDatas()
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