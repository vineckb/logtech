import { FaRegCheckSquare } from 'react-icons/fa';
import { ExpedicoesDashboard } from './Dashboard';
import { RegioesList } from './Regioes/List';
import { RotasList } from './Rotas/List';
import { ClientesList } from './Clientes/List';
import { VendedoresList } from './Vendedores/List';
import { TransportadorasList } from './Transportadoras/List';
import { VeiculosDeTrasnportadorasList } from './VeiculosDeTransportadoras/List';

const Module = {
  menuItem: {
    to: '/expedicoes',
    title: 'Expedições',
    icon: FaRegCheckSquare,
    childrens: [
      {
        to: '/expedicoes/consulta-de-regioes',
        title: 'Regiões',
      },
      {
        to: '/expedicoes/consulta-de-rotas',
        title: 'Rotas',
      },
      {
        to: '/expedicoes/consulta-de-clientes',
        title: 'Clientes',
      },
      {
        to: '/expedicoes/consulta-de-vendedores',
        title: 'Vendedores',
      },
      {
        to: '/expedicoes/consulta-de-transportadoras',
        title: 'Transportadoras',
      },
      {
        to: '/expedicoes/consulta-de-veiculos-de-transportadoras',
        title: 'Veículo Transportadora',
      },
    ],
  },

  routes: [
    {
      path: 'expedicoes',
      element: <ExpedicoesDashboard />,
    },

    {
      path: 'expedicoes/consulta-de-regioes',
      element: <RegioesList />,
    },
    {
      path: 'expedicoes/consulta-de-rotas',
      element: <RotasList />,
    },
    {
      path: 'expedicoes/consulta-de-clientes',
      element: <ClientesList />,
    },
    {
      path: 'expedicoes/consulta-de-vendedores',
      element: <VendedoresList />,
    },
    {
      path: 'expedicoes/consulta-de-transportadoras',
      element: <TransportadorasList />,
    },
    {
      path: 'expedicoes/consulta-de-veiculos-de-transportadoras',
      element: <VeiculosDeTrasnportadorasList />,
    },
  ],
};

export default Module;
