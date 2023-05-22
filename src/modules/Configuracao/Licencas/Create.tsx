import { Box, Text } from '@chakra-ui/react';
import { LicencasForm } from './Form';

export function LicencasCreate() {
  return (
    <Box>
      <Text>Adicionar nova licença</Text>
      <LicencasForm />
    </Box>
  );
}
