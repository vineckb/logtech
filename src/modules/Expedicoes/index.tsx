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
        title: 'Veículos de Transportadoras',
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
      element: <ExpedicoesRegiao />,
    },
    {
      path: 'expedicoes/consulta-de-rotas',
      element: <ExpedicoesRota />,
    },
    {
      path: 'expedicoes/consulta-de-clientes',
      element: <ExpedicoesCliente />,
    },
    {
      path: 'expedicoes/consulta-de-vendedores',
      element: <ExpedicoesVendedor />,
    },
    {
      path: 'expedicoes/consulta-de-transportadoras',
      element: <ExpedicoesTransportadora />,
    },
    {
      path: 'expedicoes/consulta-de-veiculos-de-transportadoras',
      element: <ExpedicoesVeiculoDeTransportadora />,
    },
  ],
};
