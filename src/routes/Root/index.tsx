import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import AuthContext from '@/contexts/auth';
import { useState } from 'react';

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
  const [signed, setSigned] = useState<boolean>(false);

  const context = { signed, setSigned };

  return (
    <AuthContext.Provider value={context}>
      <ChakraProvider theme={theme}>
        <Outlet />
      </ChakraProvider>
    </AuthContext.Provider>
  );
}
