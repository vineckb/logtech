import { Box } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export function Header({ children }: PropsWithChildren) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      mb={5}
      justifyContent="space-between"
    >
      {children}
    </Box>
  );
}
