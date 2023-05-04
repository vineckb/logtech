import { useAuth } from '@/hooks';
import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactElement;
}

export function ProtectedRoute({
  children,
}: ProtectedRouteProps): ReactElement {
  const { signed } = useAuth();
  if (!signed) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}
