import { Outlet } from 'react-router-dom';
import { AuthProvider } from '@/providers/Auth';
import { ThemeProvider } from '@/providers/Theme';

export function Root() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </AuthProvider>
  );
}
