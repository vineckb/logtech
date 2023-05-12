import { FaChartLine } from 'react-icons/fa';
import { PainelDashboard } from './Dashboard';
import { PainelDeposito } from './Deposito/index';
import { PainelEndereco } from './Endereco';
import { PainelEstacao } from './Estacao';
import { PainelMotivo } from './Motivo';
import { PainelUsuario } from './Usuario';
import { PainelUsuariosLogados } from './UsuariosLogados';
import { MdOutlinePlaylistAdd, MdOutlineViewList } from 'react-icons/md';

export const PainelModule = {
  menuItem: {
    to: '/painel',
    title: 'Painel de Controle',
    icon: FaChartLine,
    childrens: [
      {
        to: '/painel/cadastro-de-depositos',
        title: 'Depósitos',
        icon: MdOutlinePlaylistAdd,
      },
      {
        to: '/painel/cadastro-de-estacoes',
        title: 'Estações',
        icon: MdOutlinePlaylistAdd,
      },
      {
        to: '/painel/cadastro-de-enderecos',
        title: 'Endereços',
        icon: MdOutlinePlaylistAdd,
      },
      {
        to: '/painel/cadastro-de-usuarios',
        title: 'Usuários',
        icon: MdOutlinePlaylistAdd,
      },
      {
        to: '/painel/cadastro-de-motivos',
        title: 'Motivos',
        icon: MdOutlinePlaylistAdd,
      },
      {
        to: '/painel/consulta-de-usuarios-logados',
        title: 'Usuários Logados',
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
