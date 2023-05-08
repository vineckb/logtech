import { ConfiguracaoIndex } from './Index/index';

const routes = [
  {
    path: 'configuracao',
    element: <ConfiguracaoIndex />,
  },
  {
    path: 'configuracao/definicao-de-licencas',
    element: <ConfiguracaoIndex />,
  },
  {
    path: 'configuracao/conexao-cliente',
    element: <ConfiguracaoIndex />,
  },
  {
    path: 'configuracao/liberacao-de-rotinas',
    element: <ConfiguracaoIndex />,
  },
  {
    path: 'configuracao/permissao-de-usuarios',
    element: <ConfiguracaoIndex />,
  },
  {
    path: 'configuracao/permissao-de-filiais',
    element: <ConfiguracaoIndex />,
  },
];

export default routes;
