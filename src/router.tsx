import { ReactElement } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Root } from '@/routes/Root';
import { Error } from '@/routes/Error';
import { Dashboard } from '@/routes/Dashboard';
import { Settings } from '@/routes/Settings';
import { SignIn } from '@/routes/SignIn';
import { Layout } from '@/components/Layout';
import { useAuth } from '@/hooks';

interface ProtectedRouteProps {
  children: ReactElement;
}

function ProtectedRoute({ children }: ProtectedRouteProps): ReactElement {
  const { signed } = useAuth();
  if (!signed) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}

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
