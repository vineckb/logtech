import { createBrowserRouter } from 'react-router-dom';
import { Root } from '@/App';
import { Error } from './Error';
import { Layout } from '@/components/Layout';
import { Settings } from '@/modules/Settings';
import { SignIn } from '@/modules/SignIn';
import { dashboardRouter } from '@/modules/Dashboard/router';
import { ProtectedRoute } from './ProtectedRoute';

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
          {
            path: 'configuracao',
            element: <Settings />,
          },
          dashboardRouter,
        ],
      },
      {
        path: 'signin',
        element: <SignIn />,
      },
    ],
  },
]);
