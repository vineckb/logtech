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
import { getSubGrupos } from '../../../service/subgrupos';

interface DataType {
   idsubgrupo: string,
   cp_grupos: string,
   nome: string,
   ativo: string,
   cp_subgrupos: number
}

const columns: ColumnsType<DataType> = [
  {
    title: 'ID Grupo',
    dataIndex: 'idgrupo',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Nome',
    dataIndex: 'nome',
  },
  {
    title: 'Ativo',
    dataIndex: 'ativo',
  },
  {
    title: 'CP Grupo',
    dataIndex: 'cp_grupos',
  }
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

export function SubGrupos(){
     const [data, setData] = useState<DataType[]>();
     const [isOpen,setIsOpen] = useState(true)
     const [close,setClose] = useState(false)

     const loadData = async () => {
       const res = await getSubGrupos()
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
            <Title title='CONSULTA DE SUBGRUPO'  isOpen={isOpen} close={close}/>
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