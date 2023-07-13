import { PageTitle } from '@/components/PageTitle';
import { Box, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Form } from './Form';
import { FormValues } from './model';
import { useSave } from './service';
import { resourceName } from './settings';

export function LicencaCreate() {
  const navigate = useNavigate();
  const { mutateAsync } = useSave();

  async function handleSave(values: FormValues) {
    try {
      const response = await mutateAsync(values);
      navigate(`../${response.data.content.idlicenca}`);
    } catch (e) {}
  }

  return (
    <Box p={5}>
      <PageTitle>
        <Text>Adicionar {resourceName}</Text>
      </PageTitle>
      <Form handleSave={handleSave} />
    </Box>
  );
}
