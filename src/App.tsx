import { Outlet } from 'react-router-dom';
import { AuthProvider } from '@/providers/Auth';
import { ThemeProvider } from '@/providers/Theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

export function Root() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
