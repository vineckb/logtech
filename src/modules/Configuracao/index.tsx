import { FaRegSun } from 'react-icons/fa';
import { MdOutlinePlaylistAdd, MdPlaylistAdd } from 'react-icons/md';
import { Outlet } from 'react-router-dom';

import { ConfiguracaoDashboard } from './Dashboard/index';

import { ConexaoCreate } from './Conexao/Create';
import { ConexaoEdit } from './Conexao/Edit';
import { ConexaoList } from './Conexao/List';

import { LicencaCreate } from './Licenca/Create';
import { LicencaEdit } from './Licenca/Edit';
import { LicencaList } from './Licenca/List';

import { RotinaCreate } from './Rotina/Create';
import { RotinaEdit } from './Rotina/Edit';
import { RotinaList } from './Rotina/List';

import { PermissaoUsuariosCreate } from './PermissaoUsuarios/Create';
import { PermissaoUsuariosEdit } from './PermissaoUsuarios/Edit';
import { PermissaoUsuariosList } from './PermissaoUsuarios/List';

import { PermissaoFiliaisCreate } from './PermissaoFiliais/Create';
import { PermissaoFiliaisEdit } from './PermissaoFiliais/Edit';
import { PermissaoFiliaisList } from './PermissaoFiliais/List';

const Module = {
  menuItem: {
    to: '/configuracao',
    title: 'Configuração da Aplicação',
    icon: FaRegSun,
    childrens: [
      {
        to: '/configuracao/definicao-de-licencas',
        title: 'Definição de Licenças',
        icon: MdOutlinePlaylistAdd,
      },
      {
        to: '/configuracao/conexao-cliente',
        title: 'Conexão Cliente',
      },
      {
        to: '/configuracao/liberacao-de-rotinas',
        title: 'Liberação de Rotinas',
        icon: MdOutlinePlaylistAdd,
      },
      {
        to: '/configuracao/permissao-de-usuarios',
        title: 'Permissão de Usuários',
        icon: MdOutlinePlaylistAdd,
      },
      {
        to: '/configuracao/permissao-de-filiais',
        title: 'Permissão de Filiais',
        icon: MdPlaylistAdd,
      },
    ],
  },

  routes: [
    {
      path: 'configuracao',
      element: <ConfiguracaoDashboard />,
    },
    {
      path: 'configuracao/definicao-de-licencas',
      element: <Outlet />,
      children: [
        { path: '', element: <LicencaList /> },
        { path: ':id', element: <LicencaEdit /> },
        { path: 'novo', element: <LicencaCreate /> },
      ],
    },
    {
      path: 'configuracao/conexao-cliente',
      element: <Outlet />,
      children: [
        { path: '', element: <ConexaoList /> },
        { path: ':id', element: <ConexaoEdit /> },
        { path: 'novo', element: <ConexaoCreate /> },
      ],
    },
    {
      path: 'configuracao/liberacao-de-rotinas',

      element: <Outlet />,
      children: [
        { path: '', element: <RotinaList /> },
        { path: ':id', element: <RotinaEdit /> },
        { path: 'novo', element: <RotinaCreate /> },
      ],
    },
    {
      path: 'configuracao/permissao-de-usuarios',

      element: <Outlet />,
      children: [
        { path: '', element: <PermissaoUsuariosList /> },
        { path: ':id', element: <PermissaoUsuariosEdit /> },
        { path: 'novo', element: <PermissaoUsuariosCreate /> },
      ],
    },
    {
      path: 'configuracao/permissao-de-filiais',

      element: <Outlet />,
      children: [
        { path: '', element: <PermissaoFiliaisList /> },
        { path: ':id', element: <PermissaoFiliaisEdit /> },
        { path: 'novo', element: <PermissaoFiliaisCreate /> },
      ],
    },
  ],
};

export default Module;
