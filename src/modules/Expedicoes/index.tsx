import { FaRegCheckSquare } from 'react-icons/fa';
import { ClientesDetails } from './Clientes/Details';
import { ClientesList } from './Clientes/List';
import { ExpedicoesDashboard } from './Dashboard';
import { RegioesList } from './Regioes/List';
import { RotasList } from './Rotas/List';
import { TransportadorasDetails } from './Transportadoras/Details';
import { TransportadorasList } from './Transportadoras/List';
import { VeiculoTransportadoraDetails } from './VeiculosDeTransportadoras/Details';
import { VeiculosDeTrasnportadorasList } from './VeiculosDeTransportadoras/List';
import { VendedoresList } from './Vendedores/List';

const Module = {
  menuItem: {
    to: '/expedicoes',
    title: 'Expedições',
    icon: FaRegCheckSquare,
    childrens: [
      {
        to: '/expedicoes/consulta-de-regioes',
        title: 'Regiões',
        fullTitle: 'Consulta de Regiões',
      },
      {
        to: '/expedicoes/consulta-de-rotas',
        title: 'Rotas',
        fullTitle: 'Consulta de Rotas',
      },
      {
        to: '/expedicoes/consulta-de-clientes',
        title: 'Clientes',
        fullTitle: 'Consulta de Clientes',
      },
      {
        to: '/expedicoes/consulta-de-vendedores',
        title: 'Vendedores',
        fullTitle: 'Consulta de Vendedores',
      },
      {
        to: '/expedicoes/consulta-de-transportadoras',
        title: 'Transportadoras',
        fullTitle: 'Consulta de Transportadoras',
      },
      {
        to: '/expedicoes/consulta-de-veiculos-de-transportadoras',
        title: 'Veículo Transportadora',
        fullTitle: 'Consulta de Veículo Transportadora',
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
      children: [{ path: ':id', element: <ClientesDetails /> }],
    },
    {
      path: 'expedicoes/consulta-de-vendedores',
      element: <VendedoresList />,
    },
    {
      path: 'expedicoes/consulta-de-transportadoras',
      element: <TransportadorasList />,
      children: [{ path: ':id', element: <TransportadorasDetails /> }],
    },
    {
      path: 'expedicoes/consulta-de-veiculos-de-transportadoras',
      element: <VeiculosDeTrasnportadorasList />,
      children: [{ path: ':id', element: <VeiculoTransportadoraDetails /> }],
    },
  ],
};

export default Module;
