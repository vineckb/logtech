import { Box, Text } from '@chakra-ui/react';
import { LicencasForm } from './Form';
import { useSave } from './service';
import { useNavigate } from 'react-router-dom';
import { LicencaFormValues } from './model';

export function LicencasCreate() {
  const navigate = useNavigate();
  const { mutateAsync } = useSave();

  async function handleSave(values: LicencaFormValues) {
    const response = await mutateAsync(values);
    navigate(`${response.data.idlicenca}`);
  }

  return (
    <Box>
      <Text>Adicionar nova licença</Text>
      <LicencasForm handleSave={handleSave} />
    </Box>
  );
}
