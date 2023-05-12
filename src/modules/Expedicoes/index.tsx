import { FaRegCheckSquare } from 'react-icons/fa';
import { ExpedicoesDashboard } from './Dashboard';
import { ExpedicoesRegiao } from './Regiao';
import { ExpedicoesRota } from './Rota';
import { ExpedicoesCliente } from './Cliente';
import { ExpedicoesVendedor } from './Vendedor';
import { ExpedicoesTransportadora } from './Transportadora';
import { ExpedicoesVeiculoDeTransportadora } from './VeiculoDeTransportadora';

export const ExpedicoesModule = {
  menuItem: {
    to: '/expedicoes',
    title: 'Expedições',
    icon: FaRegCheckSquare,
    childrens: [
      {
        to: '/expedicoes/consulta-de-regiao',
        title: 'Consulta de Região',
      },
      {
        to: '/expedicoes/consulta-de-rota',
        title: 'Consulta de Rota',
      },
      {
        to: '/expedicoes/consulta-de-cliente',
        title: 'Consulta de Cliente',
      },
      {
        to: '/expedicoes/consulta-de-vendedor',
        title: 'Consulta de Vendedor',
      },
      {
        to: '/expedicoes/consulta-de-transportadora',
        title: 'Consulta de Transportadora',
      },
      {
        to: '/expedicoes/consulta-de-veiculo-de-transportadora',
        title: 'Consulta de Veículo Transportadora',
      },
    ],
  },

  routes: [
    {
      path: 'expedicoes',
      element: <ExpedicoesDashboard />,
    },

    {
      path: 'expedicoes/consulta-de-regiao',
      element: <ExpedicoesRegiao />,
    },
    {
      path: 'expedicoes/consulta-de-rota',
      element: <ExpedicoesRota />,
    },
    {
      path: 'expedicoes/consulta-de-cliente',
      element: <ExpedicoesCliente />,
    },
    {
      path: 'expedicoes/consulta-de-vendedor',
      element: <ExpedicoesVendedor />,
    },
    {
      path: 'expedicoes/consulta-de-transportadora',
      element: <ExpedicoesTransportadora />,
    },
    {
      path: 'expedicoes/consulta-de-veiculo-de-transportadora',
      element: <ExpedicoesVeiculoDeTransportadora />,
    },
  ],
};
