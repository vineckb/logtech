import { FaRegSun } from 'react-icons/fa';
import { ConfiguracaoConexaoList } from './Conexao/List';
import { MdOutlinePlaylistAdd, MdPlaylistAdd } from 'react-icons/md';
import { ConfiguracaoDashboard } from './Dashboard/index';

import { ConexaoList } from './Conexao/List';
import { ConexaoEdit } from './Conexao/Edit';
import { ConexaoCreate } from './Conexao/Create';

import { LicencaEdit } from './Licenca/Edit';
import { LicencaCreate } from './Licenca/Create';
import { LicencaList } from './Licenca/List';

import { ConfiguracaoRotinasList } from './Rotinas/List';
import { ConfiguracaoRotinasEdit } from './Rotinas/Edit';
import { ConfiguracaoPermissaoUsuariosList } from './PermissaoUsuarios/List';
import { ConfiguracaoPermissaoUsuariosEdit } from './PermissaoUsuarios/Edit';
import { ConfiguracaoPermissaoFiliaisList } from './PermissaoFiliais/List';
import { ConfiguracaoPermissaoFiliaisEdit } from './PermissaoFiliais/Edit';
import { Outlet } from 'react-router-dom';

const Module = {
  navigation: {
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

      element: <ConfiguracaoRotinasList />,
      children: [
        {
          path: ':id/editar',
          element: <ConfiguracaoRotinasEdit />,
        },
      ],
    },
    {
      path: 'configuracao/permissao-de-usuarios',

      element: <ConfiguracaoPermissaoUsuariosList />,
      children: [
        {
          path: ':id/editar',
          element: <ConfiguracaoPermissaoUsuariosEdit />,
        },
      ],
    },
    {
      path: 'configuracao/permissao-de-filiais',

      element: <ConfiguracaoPermissaoFiliaisList />,
      children: [
        {
          path: ':id/editar',
          element: <ConfiguracaoPermissaoFiliaisEdit />,
        },
      ],
    },
  ],
};

export default Module;
