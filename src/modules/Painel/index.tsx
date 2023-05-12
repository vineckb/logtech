import { FaChartLine } from 'react-icons/fa';
import { PainelDashboard } from './Dashboard';
import { PainelDeposito } from './Deposito/index';
import { PainelEndereco } from './Endereco';
import { PainelEstacao } from './Estacao';
import { PainelMotivo } from './Motivo';
import { PainelUsuario } from './Usuario';
import { PainelUsuariosLogados } from './UsuariosLogados';

export const PainelModule = {
  menuItem: {
    to: '/painel',
    title: 'Painel de Controle',
    icon: FaChartLine,
    childrens: [
      {
        to: '/painel/cadastro-de-depositos',
        title: 'Cadastro de Depósito',
      },
      {
        to: '/painel/cadastro-de-estacoes',
        title: 'Cadastro de Estação',
      },
      {
        to: '/painel/cadastro-de-enderecos',
        title: 'Cadastro de Endereço',
      },
      {
        to: '/painel/cadastro-de-usuarios',
        title: 'Cadastro de Usuário',
      },
      {
        to: '/painel/cadastro-de-motivos',
        title: 'Cadastro de Motivos',
      },
      {
        to: '/painel/consulta-de-usuarios-logados',
        title: 'Consulta de Usuários Logados',
      },
    ],
  },
  routes: [
    {
      path: 'painel',
      element: <PainelDashboard />,
    },
    {
      path: 'painel/cadastro-de-deposito',
      element: <PainelDeposito />,
    },
    { path: '/painel/cadastro-de-depositos', element: <PainelDeposito /> },
    { path: '/painel/cadastro-de-estacoes', element: <PainelEstacao /> },
    { path: '/painel/cadastro-de-enderecos', element: <PainelEndereco /> },
    { path: '/painel/cadastro-de-usuarios', element: <PainelUsuario /> },
    { path: '/painel/cadastro-de-motivos', element: <PainelMotivo /> },
    {
      path: '/painel/consulta-de-usuarios-logados',
      element: <PainelUsuariosLogados />,
    },
  ],
};
