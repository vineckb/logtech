import { FaRegCheckSquare } from 'react-icons/fa';
import { ExpedicoesDashboard } from './Dashboard';
import { ExpedicoesRegioes } from './Regioes';
import { ExpedicoesRotas } from './Rotas';
import { ExpedicoesClientes } from './Clientes';
import { ExpedicoesVendedores } from './Vendedores';
import { ExpedicoesTransportadoras } from './Transportadoras';
import { ExpedicoesVeiculosDeTransportadoras } from './VeiculosDeTransportadoras';

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
      element: <ExpedicoesRegioes />,
    },
    {
      path: 'expedicoes/consulta-de-rotas',
      element: <ExpedicoesRotas />,
    },
    {
      path: 'expedicoes/consulta-de-clientes',
      element: <ExpedicoesClientes />,
    },
    {
      path: 'expedicoes/consulta-de-vendedores',
      element: <ExpedicoesVendedores />,
    },
    {
      path: 'expedicoes/consulta-de-transportadoras',
      element: <ExpedicoesTransportadoras />,
    },
    {
      path: 'expedicoes/consulta-de-veiculos-de-transportadoras',
      element: <ExpedicoesVeiculosDeTransportadoras />,
    },
  ],
};
