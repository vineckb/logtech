import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

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

export function ThemeProvider({ children }: PropsWithChildren) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
