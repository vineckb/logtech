import { createBrowserRouter } from 'react-router-dom';
import { Root } from '@/routes/Root';
import { Error } from '@/routes/Error';
import { Dashboard } from '@/routes/Dashboard';
import { Settings } from '@/routes/Settings';
import { SignIn } from '@/routes/SignIn';
import { Layout } from '@/components/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    element: <Root />,
    children: [
      {
        path: '',
        element: <Layout />,
        children: [
          {
            path: 'settings',
            element: <Settings />,
          },
          {
            path: 'dashboard',
            element: <Dashboard />,
          },
        ],
      },
      {
        path: 'signin',
        element: <SignIn />,
      },
    ],
  },
]);
