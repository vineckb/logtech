import { createBrowserRouter } from 'react-router-dom';
import { Root } from '@/App';
import { Error } from './Error';
import { Layout } from '@/components/Layout';
import { SignIn } from '@/modules/SignIn';
import { ProtectedRoute } from './ProtectedRoute';

// modules
import AuditoriaModule from '@/modules/Auditoria';
import ConfiguracaoModule from '@/modules/Configuracao';
import EntradasModule from '@/modules/Entradas';
import ExpedicoesModule from '@/modules/Expedicoes';
import GestaoModule from '@/modules/Gestao';
import PainelModule from '@/modules/Painel';
import MovimentacoesModule from '@/modules/Movimentacoes';

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    element: <Root />,
    children: [
      {
        path: '',
        element: (
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        ),
        children: [
          ...PainelModule.routes,
          ...AuditoriaModule.routes,
          ...ConfiguracaoModule.routes,
          ...EntradasModule.routes,
          ...ExpedicoesModule.routes,
          ...GestaoModule.routes,
          ...MovimentacoesModule.routes,
        ],
      },
      {
        path: 'signin',
        element: <SignIn />,
      },
    ],
  },
]);
