import { Box, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { PageTitle } from '@/components/PageTitle';
import { resourceName } from './settings';
import { useSave } from './service';
import { FormValues } from './model';
import { Form } from './Form';

export function RotinaCreate() {
  const navigate = useNavigate();
  const { mutateAsync } = useSave();

  async function handleSave(values: FormValues) {
    try {
      const response = await mutateAsync(values);
      navigate(`${response.data.idconexao}`);
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
