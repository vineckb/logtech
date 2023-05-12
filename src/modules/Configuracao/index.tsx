import { FaRegSun } from 'react-icons/fa';
import { ConfiguracaoConexao } from './Conexao';
import { ConfiguracaoDashboard } from './Dashboard/index';
import { ConfiguracaoLicencas } from './Licencas';
import { ConfiguracaoPermissaoFiliais } from './PermissaoFiliais';
import { ConfiguracaoPermissaoUsuarios } from './PermissaoUsuarios';
import { ConfiguracaoRotinas } from './Rotinas';

export const ConfiguracaoModule = {
  menuItem: {
    to: '/configuracao',
    title: 'Configuração da Aplicação',
    icon: FaRegSun,
    childrens: [
      {
        to: '/configuracao/definicao-de-licencas',
        title: 'Definição de Licenças',
      },
      {
        to: '/configuracao/conexao-cliente',
        title: 'Conexão Cliente',
      },
      {
        to: '/configuracao/liberacao-de-rotinas',
        title: 'Liberação de Rotinas',
      },
      {
        to: '/configuracao/permissao-de-usuarios',
        title: 'Permissão de Usuários',
      },
      {
        to: '/configuracao/permissao-de-filiais',
        title: 'Permissão de Filiais',
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
      element: <ConfiguracaoConexao />,
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
