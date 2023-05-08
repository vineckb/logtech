import { createBrowserRouter } from 'react-router-dom';
import { Root } from '@/App';
import { Error } from './Error';
import { Layout } from '@/components/Layout';
import { SignIn } from '@/modules/SignIn';
import { ProtectedRoute } from './ProtectedRoute';

// modules
import auditoriaRoutes from '@/modules/Auditoria';
import cadastroRoutes from '@/modules/Cadastro';
import configuracaoRoutes from '@/modules/Configuracao';
import consultaRoutes from '@/modules/Consulta';
import entradasRoutes from '@/modules/Entradas';
import expedicoesRoutes from '@/modules/Expedicoes';
import gestaoRoutes from '@/modules/Gestao';
import painelRoutes from '@/modules/Painel';
import recepcaoRoutes from '@/modules/Recepcao';

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
          ...painelRoutes,
          ...auditoriaRoutes,
          ...cadastroRoutes,
          ...configuracaoRoutes,
          ...consultaRoutes,
          ...entradasRoutes,
          ...expedicoesRoutes,
          ...gestaoRoutes,
          ...painelRoutes,
          ...recepcaoRoutes,
        ],
      },
      {
        path: 'signin',
        element: <SignIn />,
      },
    ],
  },
]);
