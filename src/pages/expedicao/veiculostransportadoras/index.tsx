import '../../Painel/painel.css'
import './veiculotransportadoras.css'
import { SearchOutlined } from '@ant-design/icons';
import { Divider, Input, Table, Space } from 'antd';

import { useEffect, useState } from 'react'
import { AuthContext } from '../../../contexts/auth';
import { useContext } from 'react';
import { useNavigate} from 'react-router-dom'
import { SideBar } from '../../../components/SideBar';
import { Header } from '../../../components/Header';
import { Content } from '../../../components/Content';
import { Title } from '../../../components/Title';

import type { ColumnsType } from 'antd/es/table';
import { getVeiculosTransportadoras } from '../../../service/veiculostransportadoras';

interface DataType {
   idveiculo: number,
   descricao: string,
   tramsportadora: string,
   placa: string,
   nomefantasia: string,
   chasi: string,
   tara: string,
   pesominimo: string,
}

const columns: ColumnsType<DataType> = [
  {
    title: 'ID Veiculo',
    dataIndex: 'idtransportadoras',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Descricao',
    dataIndex: 'descricao',
  },
  {
    title: 'Transportadora',
    dataIndex: 'transportadora',
  },
  {
    title: 'Placa',
    dataIndex: 'placa',
  },
  {
    title: 'Nome Fantasia',
    dataIndex: 'nomefantasia',
  },
  {
    title: 'Chasi',
    dataIndex: 'chasi',
  },
  {
    title: 'Tara',
    dataIndex: 'tara',
  },
  {
    title: 'Peso Mínimo',
    dataIndex: 'pesominimo',
  }
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.descricao === '', // Column configuration not to be checked
    name: record.descricao,
  }),
};

export function VeiculoTransportadoras(){
     const [data, setData] = useState<DataType[]>();
     const [isOpen,setIsOpen] = useState(true)
     const [close,setClose] = useState(false)

     const loadData = async () => {
       const res = await getVeiculosTransportadoras()
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
            <Title title='CONSULTA DE VEICULO TRANSPORTADORAS'  isOpen={isOpen} close={close}/>
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