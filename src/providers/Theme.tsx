import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

const theme = extendTheme({
  styles: {
    body: {
      fontFamily: 'Inter, sans-serif',
      background: '#f8f8fb',
    },

    img: {
      maxWidth: '100%',
    },
    svg: {
      maxWidth: '100%',
    },
  },
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
