import { Outlet } from 'react-router-dom';
import { FaChartLine } from 'react-icons/fa';
import { MdOutlinePlaylistAdd } from 'react-icons/md';
import { PainelDashboard } from './Dashboard';

import { DepositoList } from './Deposito/List';
import { DepositoEdit } from './Deposito/Edit';
import { DepositoCreate } from './Deposito/Create';

import { EstacaoList } from './Estacao/List';
import { EstacaoEdit } from './Estacao/Edit';
import { EstacaoCreate } from './Estacao/Create';
import { EnderecoList } from './Endereco/List';

import { EnderecoEdit } from './Endereco/Edit';
import { EnderecoCreate } from './Endereco/Create';

import { UsuarioList } from './Usuario/List';
import { UsuarioEdit } from './Usuario/Edit';
import { UsuarioCreate } from './Usuario/Create';

import { MotivoList } from './Motivo/List';
import { MotivoEdit } from './Motivo/Edit';
import { MotivoCreate } from './Motivo/Create';

import { UsuarioLogadoList } from './UsuarioLogado/List';

const Module = {
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
      path: '/painel/cadastro-de-depositos',
      element: <Outlet />,
      children: [
        { path: '', element: <DepositoList /> },
        { path: ':id', element: <DepositoEdit /> },
        { path: 'novo', element: <DepositoCreate /> },
      ],
    },
    {
      path: '/painel/cadastro-de-estacoes',
      element: <Outlet />,
      children: [
        { path: '', element: <EstacaoList /> },
        { path: ':id', element: <EstacaoEdit /> },
        { path: 'novo', element: <EstacaoCreate /> },
      ],
    },
    {
      path: '/painel/cadastro-de-enderecos',
      element: <Outlet />,
      children: [
        { path: '', element: <EnderecoList /> },
        { path: ':id', element: <EnderecoEdit /> },
        { path: 'novo', element: <EnderecoCreate /> },
      ],
    },
    {
      path: '/painel/cadastro-de-usuarios',
      element: <Outlet />,
      children: [
        { path: '', element: <UsuarioList /> },
        { path: ':id', element: <UsuarioEdit /> },
        { path: 'novo', element: <UsuarioCreate /> },
      ],
    },
    {
      path: '/painel/cadastro-de-motivos',
      element: <Outlet />,
      children: [
        { path: '', element: <MotivoList /> },
        { path: ':id', element: <MotivoEdit /> },
        { path: 'novo', element: <MotivoCreate /> },
      ],
    },
    {
      path: '/painel/consulta-de-usuarios-logados',
      element: <UsuarioLogadoList />,
    },
  ],
};

export default Module;
