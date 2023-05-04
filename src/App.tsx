import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from '@/providers/auth';

const theme = extendTheme({
  components: {
    Drawer: {
      variants: {
        permanent: {
          dialog: {
            pointerEvents: 'auto',
          },
          dialogContainer: {
            pointerEvents: 'none',
          },
        },
      },
    },
  },
});

export function Root() {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Outlet />
      </ChakraProvider>
    </AuthProvider>
  );
}
