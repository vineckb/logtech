import { FaRegSun } from 'react-icons/fa';
import { ConfiguracaoConexaoList } from './Conexao/List';
import { MdOutlinePlaylistAdd, MdPlaylistAdd } from 'react-icons/md';
import { ConfiguracaoDashboard } from './Dashboard/index';
import { ConfiguracaoConexaoEdit } from './Conexao/Edit';
import { ConfiguracaoLicencasEdit } from './Licencas/Edit';
import { ConfiguracaoLicencasList } from './Licencas/List';
import { ConfiguracaoRotinasList } from './Rotinas/List';
import { ConfiguracaoRotinasEdit } from './Rotinas/Edit';
import { ConfiguracaoPermissaoUsuariosList } from './PermissaoUsuarios/List';
import { ConfiguracaoPermissaoUsuariosEdit } from './PermissaoUsuarios/Edit';
import { ConfiguracaoPermissaoFiliaisList } from './PermissaoFiliais/List';
import { ConfiguracaoPermissaoFiliaisEdit } from './PermissaoFiliais/Edit';

export const ConfiguracaoModule = {
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
      element: <ConfiguracaoLicencasList />,
      children: [
        {
          path: ':id/editar',
          element: <ConfiguracaoLicencasEdit />,
        },
      ],
    },
    {
      path: 'configuracao/conexao-cliente',
      element: <ConfiguracaoConexaoList />,
      children: [
        {
          path: ':id/editar',
          element: <ConfiguracaoConexaoEdit />,
        },
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
