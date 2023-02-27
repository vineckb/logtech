import '../../Painel/painel.css'
import '../../configuracao/licenca.css'
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
import { getUsuarios } from '../../../service/usuarios';

interface DataType {
  idusuario: number,
  nome: string,
  login: string,
  senha: string,
  ativo: string,
  datacadastro: string,
  idsetor: number,
  idturno: number,
  email: string,
  telefone: string
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
    dataIndex: 'datacadastro',
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
  },
  {
    title: 'Telefone',
    dataIndex: 'telefone',
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
    disabled: record.nome === '', // Column configuration not to be checked
    name: record.nome,
  }),
};

export function Users(){
     const [isOpen,setIsOpen] = useState(true)
     const [close,setClose] = useState(false)
     const [data, setData] = useState<Array<DataType>>([])
     
     const loadData = async () => {
      const res = await getUsuarios()
      setData(res)
     }

     const handleCadastro =  async () => {
      navigate('/configuracao/usuarios/create')
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
            <Title title='USUÀRIOS'  isOpen={isOpen} close={close}/>
            <Content isOpen={isOpen} close={close}>
               <div>
                    <div className='container-filter-table'>
                        <div className='grid-input-filter-table'>
                          <Input size="large" placeholder="Pesquisar" prefix={<SearchOutlined />} />
                        </div>
                        <div className='grid-input-filter-table'>
                          <Space wrap style={{ width: '100%', justifyContent: 'flex-end'}}>
                            <Button onClick={() => handleCadastro()} size="large"  style={{width: '150px', fontSize: 14}} type="primary" block>NOVO</Button>
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