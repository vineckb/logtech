import { PageTitle } from '@/components/PageTitle';
import { Box, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Form } from './Form';
import { FormValues } from './model';
import { useSave } from './service';
import { resourceTitle } from './settings';

export function ConexaoCreate() {
  const navigate = useNavigate();
  const { mutateAsync } = useSave();

  async function handleSave(values: FormValues) {
    const response = await mutateAsync(values);
    navigate(`${response.data.idconexao}`);
  }

  return (
    <Box p={5}>
      <PageTitle>
        <Text>Adicionar {resourceTitle}</Text>
      </PageTitle>
      <Form handleSave={handleSave} />
    </Box>
  );
}
