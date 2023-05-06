import { Outlet } from 'react-router-dom';
import { AuthProvider } from '@/providers/auth';
import { ThemeProvider } from '@/providers/theme';

export function Root() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </AuthProvider>
  );
}
