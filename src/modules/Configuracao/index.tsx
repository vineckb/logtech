import { FaRegSun } from 'react-icons/fa';
import { ConfiguracaoConexaoList } from './Conexao/List';
import { ConfiguracaoDashboard } from './Dashboard/index';
import { ConfiguracaoLicencas } from './Licencas';
import { ConfiguracaoPermissaoFiliais } from './PermissaoFiliais';
import { ConfiguracaoPermissaoUsuarios } from './PermissaoUsuarios';
import { ConfiguracaoRotinas } from './Rotinas';
import { MdOutlinePlaylistAdd, MdPlaylistAdd } from 'react-icons/md';
import { ConfiguracaoConexaoItem } from './Conexao/Item';
import { ConfiguracaoConexaoItemEdit } from './Conexao/Item/Edit';
import { ConfiguracaoConexaoItemDetails } from './Conexao/Item/Details';

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
      element: <ConfiguracaoLicencas />,
    },
    {
      path: 'configuracao/conexao-cliente',
      element: <ConfiguracaoConexaoList />,
      children: [
        {
          path: ':id',
          element: <ConfiguracaoConexaoItem />,
          children: [
            { path: '', element: <ConfiguracaoConexaoItemDetails /> },
            { path: 'editar', element: <ConfiguracaoConexaoItemEdit /> },
          ],
        },
      ],
    },
    {
      path: 'configuracao/liberacao-de-rotinas',
      element: <ConfiguracaoRotinas />,
    },
    {
      path: 'configuracao/permissao-de-usuarios',
      element: <ConfiguracaoPermissaoUsuarios />,
    },
    {
      path: 'configuracao/permissao-de-filiais',
      element: <ConfiguracaoPermissaoFiliais />,
    },
  ],
};
