import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Layout } from '../components/Layout';

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
      <Layout />
    </ChakraProvider>
  );
}
