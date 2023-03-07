import '../../Painel/painel.css'
import './fornecedores.css'
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
import { getFornecedores } from '../../../service/fornecedores';

interface DataType {
  idfornecedor: string,
  idatividade: number,
  nome: string,
  nomefantasia: string,
  cpf: string,
  ie: string,
  estado: string,
  codcidade: string,
  bairro: string,
  endereco: string,
  numero: number,
  telefone: string,
  cp_fornecedores: number
}

const columns: ColumnsType<DataType> = [
  {
    title: 'ID Forneced',
    dataIndex: 'idfornecedor',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Nome',
    dataIndex: 'nome',
  },
  {
    title: 'CPF',
    dataIndex: 'cpf',
  },
  {
    title: 'IE',
    dataIndex: 'ie',
  },
  {
    title: 'UF',
    dataIndex: 'uf',
  },
  {
    title: 'C.Cidade',
    dataIndex: 'c_cidade',
  },
  {
    title: 'Logradouro',
    dataIndex: 'logradouro',
  },
  {
    title: 'Número',
    dataIndex: 'numero',
  },
  {
    title: 'Bairro',
    dataIndex: 'bairro',
  }
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.cpf === '', // Column configuration not to be checked
    name: record.cpf,
  }),
};

export function Fornecedores(){
     const [data, setData] = useState<DataType[]>();
     const [isOpen,setIsOpen] = useState(true)
     const [close,setClose] = useState(false)

     const loadData = async () => {
       const res = await getFornecedores()
       setData(res);
     }

     useEffect( () => {
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
            <Title title='CONSULTA DE FORNECEDORES'  isOpen={isOpen} close={close}/>
            <Content isOpen={isOpen} close={close}>
               <div>
                    <div className='container-filter-table'>
                        <div className='grid-input-filter-table'>
                          <Input size="large" placeholder="Pesquisar" prefix={<SearchOutlined />} />
                        </div>
                        <div className='grid-input-filter-table'>
                          <Space wrap style={{ width: '100%', justifyContent: 'flex-end'}}>
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