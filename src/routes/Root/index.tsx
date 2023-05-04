import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

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
    <ChakraProvider theme={theme}>
      <Outlet />
    </ChakraProvider>
  );
}
